export const MAX_VIDEO_SIZE = 500 * 1024 * 1024
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024

export const BUNNY = {
  STREAM_BASE_URL: 'https://video.bunnycdn.com/library',
  STORAGE_BASE_URL: 'https://sg.storage.bunnycdn.com/cherry-memero',
  CDN_URL: 'https://cherry-memero.b-cdn.net',
  EMBED_URL: 'https://iframe.mediadelivery.net/embed',
  TRANSCRIPT_URL: 'https://vz-d0b63b69-2e8.b-cdn.net',
}

export const emojis = ['😂', '😍', '👍']

export const filterOptions = [
  'Most Viewed',
  'Most Recent',
  'Oldest First',
  'Least Viewed',
]

export const visibilities: Visibility[] = ['public', 'private']

export const ICONS = {
  record: '/assets/icons/record.svg',
  close: '/assets/icons/close.svg',
  upload: '/assets/icons/upload.svg',
}

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
}

export const infos = ['transcript', 'metadata']

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
}

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: 'video/webm;codecs=vp9,opus',
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
}
export const dummyCards = [
  {
    id: '1',
    title: '안녕 나의 설렘아/ 엔플라잉 PLAYLIST',
    thumbnail: '/assets/samples/thumbnail (1).png',
    createdAt: new Date('2025-03-19'),
    userImg: '/assets/images/jason.png',
    username: '핸🌙',
    views: 248078,
    visibility: 'public',
    duration: 1653,
  },
  {
    id: '2',
    title: '엔플라잉 (N.Flying) - Blue Moon [가사/Lyrics]',
    thumbnail: '/assets/samples/thumbnail (2).png',
    createdAt: new Date('2025-04-15'),
    userImg: '/assets/images/alex.png',
    username: '웅키',
    views: 585681,
    visibility: 'public',
    duration: 215,
  },
  {
    id: '3',
    title: 'N.Flying (엔플라잉) Blue Moon MV',
    thumbnail: '/assets/samples/thumbnail (3).png',
    createdAt: new Date('2023-05-20'),
    userImg: '/assets/images/david.png',
    username: 'FNCEnt',
    views: 5948284,
    visibility: 'public',
    duration: 219,
  },
  {
    id: '4',
    title: 'N.Flying (엔플라잉) 만년설 (Everlasting)MV',
    thumbnail: '/assets/samples/thumbnail (4).png',
    createdAt: new Date('2025-05-28'),
    userImg: '/assets/images/emily.png',
    username: 'N.Flying (엔플라잉)',
    views: 5545107,
    visibility: 'public',
    duration: 290,
  },
  {
    id: '5',
    title:
      '[Playlist] 내 최애 픽한 데이식스 노래 모음 🎹🥁🎸🎼 DAY6 Favorite ipod Playlist 데이식스 플레이리스트',
    thumbnail: '/assets/samples/thumbnail (5).png',
    createdAt: new Date('2024-10-29'),
    userImg: '/assets/images/jessica.png',
    username: '페이보릿 féivərit',
    views: 110967,
    visibility: 'public',
    duration: 1318,
  },
  {
    id: '6',
    title:
      'N.Flying(엔플라잉)의 킬링보이스를 라이브로! - 옥탑방, Blue Moon, 만년설, Firefly, Flashback, Autumn Dream, 아 진짜요, 폭망',
    thumbnail: '/assets/samples/thumbnail (6).png',
    createdAt: new Date('2025-08-23'),
    userImg: '/assets/images/lisa.png',
    username: '초코',
    views: 24452,
    visibility: 'public',
    duration: 1573,
  },
  {
    id: '7',
    title:
      'DAY6(데이식스)의 킬링보이스를 라이브로! – 예뻤어, 한 페이지가 될 수 있게, Zombie, Welcome to the Show, 좋아합니다, 놓아 놓아, 놓아, 장난 아닌데',
    thumbnail: '/assets/samples/thumbnail (7).png',
    createdAt: new Date('2024-03-19'),
    userImg: '/assets/images/michael.png',
    username: '딩고 뮤직 / dingo music',
    views: 17510825,
    visibility: 'public',
    duration: 2163,
  },
  {
    id: '8',
    title:
      '[🎧𝙋𝙇𝘼𝙔𝙇𝙄𝙎𝙏] ‘’ N.Flying(엔플라잉)의 라이브 모음 (LIVE ON UNPLUGGED Ver.)',
    thumbnail: '/assets/samples/thumbnail (8).png',
    createdAt: new Date('2022-06-24'),
    userImg: '/assets/images/sarah.png',
    username: 'THE K-POP',
    views: 821835,
    visibility: 'public',
    duration: 2766,
  },
]
