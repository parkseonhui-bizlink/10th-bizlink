'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '@/styles/message/message.module.css'

gsap.registerPlugin(ScrollTrigger)

const Message = () => {
  const messageRef = useRef(null)
  const sinceRef = useRef(null)
  const numRef = useRef(null)
  const titleRef = useRef(null)
  const topGradientRef = useRef(null)
  const bottomGradientRef = useRef(null)

  useEffect(() => {
    gsap.to(messageRef.current, {
      backgroundPosition: '50% 20%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: messageRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
    gsap.fromTo(
      sinceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sinceRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      numRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: numRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )
    gsap.to(topGradientRef.current, {
      y: 100,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: topGradientRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.to(bottomGradientRef.current, {
      y: -100,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: bottomGradientRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })
  }, [])

  return (
    <section ref={messageRef} className={`sec message ${styles.message}`}>
      <div ref={topGradientRef} className="gradientBg gradientTop" />
      <div ref={bottomGradientRef} className="gradientBg gradientBottom" />
      <section className="secInner">
        <div className="titleArea">
          <span ref={sinceRef}>since</span>
          <div className={`secTitleNum ${styles.num}`}>
            <p ref={numRef}>2015</p>
          </div>
          <h2 ref={titleRef} className="secTitle">
            10年間本当にありがとうございました。
          </h2>
        </div>
        <div className={styles.messageBox}>
          <p ref={titleRef}>
            皆さまの夢と共に、未来へ。
            <br />
            私たちの始まりは、間取り5坪の小さなオフィスでした。
            <br />
            そこから10年――。
            <br />
            日本初のIT人材プラットフォーム企業として、
            <br />
            独自性ある技術を磨きながら刻んできた年月。
            <br />
            それは、夢を追い続けた歴史でもあります。
            <br />
            10周年という節目を迎えた今。
            <br />
            積み重ねてきた歴史と誇りを胸に、これからも、
            <br />
            ビズリンクに関わる全ての方と一緒にたくさんの夢を叶えていきましょう。
          </p>
        </div>
      </section>
    </section>
  )
}

export default Message
