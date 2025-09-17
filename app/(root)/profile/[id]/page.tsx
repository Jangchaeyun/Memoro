import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'
import { getAllVideosByUser } from '@/lib/actions/video'
import { redirect } from 'next/navigation'
import EmptyState from '@/components/EmptyState'

const Page = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params
  const { query, filter } = await searchParams

  const { user, videos } = await getAllVideosByUser(id, query, filter)

  if (!user) redirect('/404')

  return (
    <div className='wrapper page'>
      <Header
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ''}
      />

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
          title='아직 사용 가능한 동영상이 없습니다'
          description='동영상을 업로드하면 동영상이 표시됩니다.'
        />
      )}
    </div>
  )
}

export default Page
