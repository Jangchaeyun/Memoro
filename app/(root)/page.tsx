import React from 'react'
import Header from '@/components/Header'
import { dummyCards } from '@/constants'
import VideoCard from '@/components/VideoCard'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='모든 비디오' subHeader='공공 라이브러리' />

      <section className='video-grid'>
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  )
}

export default Page
