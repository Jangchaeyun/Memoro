'use client'

import React, { ChangeEvent, useState } from 'react'

import FormField from '@/components/FormField'
import FileInput from '@/components/FileInput'

const Page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility: 'public',
  })

  const video = {}
  const thumbnail = {}
  const [error, setError] = useState(null)

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target

    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }
  return (
    <div className='wrapper-md upload-page'>
      <h1>비디오 업로드</h1>

      {error && <div className='error-field'>{error}</div>}

      <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5'>
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
          type='video'
        />
        <FileInput />
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
      </form>
    </div>
  )
}

export default Page
