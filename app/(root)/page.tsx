import React from 'react'
import Header from '@/components/Header'
import { getAllVideos } from '@/lib/actions/video'
import EmptyState from '@/components/EmptyState'
import VideoCard from '@/components/VideoCard'

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  )

  return (
    <main className='wrapper page'>
      <Header title='모든 비디오' subHeader='공공 라이브러리' />
      {videos?.length > 0 ? (
        <section className='video-grid'>
          {videos.map(({ videos, user }) => (
            <VideoCard
              key={videos.id}
              {...videos}
              thumbnail={videos.thumbnailUrl}
              userImg={user?.image || ''}
              username={user?.name || '게스트'}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon='/assets/icons/video.svg'
          title='비디오 없음'
          description='다시 검색해보세요'
        />
      )}
    </main>
  )
}

export default Page
