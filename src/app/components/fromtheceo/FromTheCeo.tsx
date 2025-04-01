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
          <h2 className="secTitle">ご挨拶</h2>
          <h3>代表取締役兼CEO</h3>
          <p>姜 大成(かん てそん)</p>
        </div>
        <article className={styles.videoarea}>
          {/* TODO: YOUTUBE */}
          <Image src="/images/dummy.png" width={982} height={541} alt="dummy" />
        </article>
      </section>
    </section>
  )
}

export default FromTheCeo
