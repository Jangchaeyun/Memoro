import { createIframeLink } from '@/lib/util'
import React from 'react'

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <div className='video-player'>
      <iframe
        src={createIframeLink(videoId)}
        loading='lazy'
        title='비디오 플레이어'
        style={{ border: 0, zIndex: 50 }}
        allowFullScreen
        allow='accelerometer; gyroscope; autoplay; encryted-media; picture-in-picture; '
      ></iframe>
    </div>
  )
}

export default VideoPlayer
