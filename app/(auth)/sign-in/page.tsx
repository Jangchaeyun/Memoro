import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
          <Image
            src='/assets/icons/logo.svg'
            alt='logo'
            width={32}
            height={32}
          />
        </Link>

        <div className='description'>
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src='/assets/icons/star.svg'
                  alt='star'
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Memoro를 사용하면 화면 녹화가 간편합니다. 간단한 연습부터 전체
              프레젠테이션까지, 몇 초 만에 빠르고 원활하게 공유할 수 있습니다.
            </p>
            <article>
              <Image
                src='/assets/images/jason.png'
                alt='jason'
                height={64}
                width={64}
                className='rounded-full'
              />
              <div>
                <h2>핸달</h2>
                <p>유튜버, 핸🌙</p>
              </div>
            </article>
          </section>
        </div>
        <p>ⓒ Memoro {new Date().getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
          <Link href='/'>
            <Image
              src='/assets/icons/logo.svg'
              alt='logo'
              width={40}
              height={40}
            />
            <h1>Memoro</h1>
          </Link>
          <p>
            지금 바로 첫 번째 <span>Memoro 비디오</span>를 만들어 공유해 보세요!
          </p>
          <button>
            <Image
              src='/assets/icons/google.svg'
              alt='google'
              width={22}
              height={22}
            />
            <span>구글로 로그인</span>
          </button>
        </section>
      </aside>
      <div className='overlay'></div>
    </main>
  )
}

export default Page
