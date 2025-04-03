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
        <article className={styles.videoarea}>
          <a
            href="https://drive.google.com/file/d/1tWBpUJX9uC6EkE3SxbwPuN96NYsELPJW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.arrowImg} src="/images/arrow.svg" alt=">" />
            <img src="/images/interview-thumbnail.png" alt="" />
          </a>
        </article>
      </section>
    </section>
  )
}

export default FromTheCeo
