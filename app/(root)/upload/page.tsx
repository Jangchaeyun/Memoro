'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import FormField from '@/components/FormField'
import FileInput from '@/components/FileInput'
import { useFileInput } from '@/lib/hook/useFileInput'
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from '@/constants'
import {
  getThumbnailUploadUrl,
  getVideoUploadUrl,
  saveVideoDetails,
} from '@/lib/actions/video'
import { useRouter } from 'next/navigation'

const uploadFileToBunny = (
  file: File,
  uploadUrl: string,
  accessKey: string
): Promise<void> =>
  fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
      AccessKey: accessKey,
    },
    body: file,
  }).then((response) => {
    if (!response.ok) throw new Error(`Upload failed`)
  })

const Page = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)

  const [formData, setFormData] = useState<VideoFormValues>({
    title: '',
    description: '',
    tags: '',
    visibility: 'public',
  })

  const video = useFileInput(MAX_VIDEO_SIZE)
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE)

  useEffect(() => {
    if (video.duration !== null || 0) {
      setVideoDuration(video.duration)
    }
  }, [video.duration])

  useEffect(() => {
    const checkForRecordedVideo = async () => {
      try {
        const stored = sessionStorage.getItem('recordedVideo')

        if (!stored) return

        const { url, name, type, duration } = JSON.parse(stored)
        const blob = await fetch(url).then((res) => res.blob())
        const file = new File([blob], name, { type, lastModified: Date.now() })

        if (video.inputRef.current) {
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(file)
          video.inputRef.current.files = dataTransfer.files

          const event = new Event('change', { bubbles: true })
          video.inputRef.current.dispatchEvent(event)

          video.handleFileChange({
            target: { files: dataTransfer.files },
          } as ChangeEvent<HTMLInputElement>)
        }
        if (duration) setVideoDuration(duration)
        sessionStorage.removeItem('recordedVideo')
        URL.revokeObjectURL(url)
      } catch (e) {
        console.error(e, 'Error loading recorded video')
      }
    }

    checkForRecordedVideo()
  }, [video])

  const [error, setError] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      if (!video.file || !thumbnail.file) {
        setError('Please upload vide and thumbnail')
        return
      }
      if (!video.file || !formData.description) {
        setError('Please fill in all the details')
        return
      }

      const {
        videoId,
        uploadUrl: videoUploadUrl,
        accessKey: videoAccessKey,
      } = await getVideoUploadUrl()

      if (!videoUploadUrl || !videoAccessKey)
        throw new Error('Failed to get video upload credentials')

      await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey)

      const {
        uploadUrl: thumbnailUploadUrl,
        accessKey: thumbnailAccessKey,
        cdnUrl: thumbmailCdnUrl,
      } = await getThumbnailUploadUrl(videoId)

      if (!thumbnailUploadUrl || !thumbmailCdnUrl || !thumbnailAccessKey)
        throw new Error('Failed to get video thumbnail upload credentials')

      await uploadFileToBunny(
        thumbnail.file,
        thumbnailUploadUrl,
        thumbnailAccessKey
      )

      await saveVideoDetails({
        videoId,
        thumbnailUrl: thumbmailCdnUrl,
        ...formData,
        duration: videoDuration,
      })

      router.push(`/`)
    } catch (error) {
      console.log('Error submitting form: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className='wrapper-md upload-page'>
      <h1>비디오 업로드</h1>

      {error && <div className='error-field'>{error}</div>}

      <form
        className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5'
        onSubmit={handleSubmit}
      >
        <FormField
          id='title'
          label='제목'
          placeholder='명확하고 간결한 비디오 제목을 입력하세요'
          value={formData.title}
          onChange={handleInputChange}
        />
        <FormField
          id='description'
          label='설명'
          placeholder='이 영상이 무엇에 대한 것인지 설명해주세요'
          value={formData.description}
          as='textarea'
          onChange={handleInputChange}
        />
        <FileInput
          id='video'
          label='비디오'
          accept='video/*'
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type='video'
        />
        <FileInput
          id='thumbnail'
          label='썸네일'
          accept='image/*'
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type='image'
        />
        <FormField
          id='visibility'
          label='공개/비공개'
          value={formData.visibility}
          as='select'
          options={[
            { value: 'public', label: '공개' },
            { value: 'private', label: '비공개' },
          ]}
          onChange={handleInputChange}
        />

        <button type='submit' disabled={isSubmitting} className='submit-button'>
          {isSubmitting ? '업로드 중' : '비디오 업로드'}
        </button>
      </form>
    </div>
  )
}

export default Page
