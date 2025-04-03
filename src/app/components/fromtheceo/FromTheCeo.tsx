'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/fromTheCeo/fromTheCeo.module.css'

const FromTheCeo = () => {
  return (
    <section className="sec grdeBlue formtheceo">
      <section className="secInner">
        <figure className="titleImg">
          <Image
            src="/images/section/FROMTHECEO.svg"
            width={693}
            height={158}
            alt="FROM THE CEO"
          />
        </figure>
        <div className="titleArea">
          <h2 className="secTitle">トップメッセージ</h2>
          <h3>代表取締役兼CEO</h3>
          <p>姜 大成(かん てそん)</p>
        </div>
        <div className={styles.youtubeContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8gYv7qR-OVU?si=HHtxgrxQaWzOcJu7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </section>
  )
}

export default FromTheCeo
