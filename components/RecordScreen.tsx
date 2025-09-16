'use client'

import { ICONS } from '@/constants'
import { useScreenRecording } from '@/lib/hook/useScreenRecording'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

const RecordScreen = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const {
    isRecording,
    recordedBlob,
    recordedVideoUrl,
    recordingDuration,
    startRecording,
    stopRecording,
    resetRecording,
  } = useScreenRecording()

  const closeModal = () => {
    resetRecording()
    setIsOpen(false)
  }

  const handleStart = async () => {
    await startRecording()
  }

  const recordAgain = async () => {
    resetRecording()
    await startRecording()

    if (recordedVideoUrl && videoRef.current) {
      videoRef.current.src = recordedVideoUrl
    }
  }

  const goToUpload = () => {
    if (!recordedBlob) return
    const url = URL.createObjectURL(recordedBlob)

    sessionStorage.setItem(
      'recordedVideo',
      JSON.stringify({
        url,
        name: 'screen-recording.webm',
        type: recordedBlob.type,
        size: recordedBlob.size,
        duration: recordingDuration || 0,
      })
    )
    router.push('/upload')
    closeModal()
  }

  return (
    <div className='record'>
      <button className='primary-btn' onClick={() => setIsOpen(true)}>
        <Image src={ICONS.record} alt='record' width={16} height={16} />
        <span>비디오 녹화</span>
      </button>

      {isOpen && (
        <section className='dialog'>
          <div className='overlay-record' onClick={closeModal} />
          <div className='dialog-content'>
            <figure>
              <h3>화면 녹화</h3>
              <button>
                <Image src={ICONS.close} alt='close' width={20} height={20} />
              </button>
            </figure>
            <section>
              {isRecording ? (
                <article>
                  <div />
                  <span>녹화가 진행중</span>
                </article>
              ) : recordedVideoUrl ? (
                <video ref={videoRef} src={recordedVideoUrl} controls />
              ) : (
                <p>녹화를 클릭하여 화면 캡처를 시작하세요.</p>
              )}
            </section>

            <div className='record-box'>
              {!isRecording && !recordedVideoUrl && (
                <button onClick={handleStart} className='record-start'>
                  <Image
                    src={ICONS.record}
                    alt='record'
                    width={16}
                    height={16}
                  />
                  녹화
                </button>
              )}
              {isRecording && (
                <button onClick={stopRecording} className='record-stop'>
                  <Image
                    src={ICONS.record}
                    alt='record'
                    width={16}
                    height={16}
                  />
                  녹화 멈춤
                </button>
              )}

              {recordedVideoUrl && (
                <>
                  <button onClick={recordAgain}>다시 녹화</button>
                  <button onClick={goToUpload} className='record-upload'>
                    <Image
                      src={ICONS.upload}
                      alt='upload'
                      width={16}
                      height={16}
                    />
                    업로드 계속하기
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default RecordScreen
