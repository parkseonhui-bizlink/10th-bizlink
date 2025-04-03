'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/progress/progress.module.css'
import Image from 'next/image'
import gsap from 'gsap'

const Progress = ({
  activeIndex,
  ref,
}: {
  activeIndex: number
  ref?: React.Ref<HTMLDivElement>
}) => {
  const [isClient, setIsClient] = useState(false)
  const progressBoxRef = useRef<HTMLDivElement | null>(null)
  const topGradientRef = useRef(null)
  const bottomGradientRef = useRef(null)

  useEffect(() => {
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

  const years = [
    '2015.4-2016.8',
    '2016.8-2017.3',
    '2017.3-2018.10',
    '2018.10-2019.10',
    '2019.10-2021.3',
    '2021.3-2023.1',
    '2023.1-2024.6',
    '2024.6-Now',
  ]
  const enTitle = [
    'Teito Shibuya Bid',
    'Kanaya Hotel Mansion',
    'Executive Tower',
    'Furointoumita Mita',
    'Asoruteihigasisinbasi',
    'U’s1 Bld',
    'Daiichiseimei Bld',
    'Gohantanakanakaba Bld',
  ]
  const titles = [
    '帝都渋谷ビル',
    '金谷ホテルマンション',
    'エグゼクティブタワー',
    'フロイントゥ三田',
    'アソルティ東新橋',
    'U’s-1ビル',
    '第一生命ビルディング ',
    '五反田中央ビル',
  ]
  const subtitles = [
    '間取り5坪',
    '間取り10坪',
    '間取り30坪',
    '間取り10坪',
    '間取り30坪',
    '間取り60坪',
    '間取り150坪',
    '間取り175坪',
  ]
  const images = [
    '/images/section/progressSection/progress01.png',
    '/images/section/progressSection/progress02.png',
    '/images/section/progressSection/progress03.png',
    '/images/section/progressSection/progress04.png',
    '/images/section/progressSection/progress05.png',
    '/images/section/progressSection/progress06.png',
    '/images/section/progressSection/progress07.png',
    '/images/section/progressSection/progress08.png',
  ]

  const validIndex = Math.max(0, Math.min(activeIndex, images.length - 1))
  const totalSteps = 8

  useEffect(() => {
    if (!progressBoxRef.current) return

    const yearText = progressBoxRef.current.querySelector('.progressYear p')
    const buildingText = progressBoxRef.current.querySelector(
      '.progressBuilding p'
    )
    const titleText = progressBoxRef.current.querySelector('.progressTitle')
    const subtitleText =
      progressBoxRef.current.querySelector('.progressSubtitle')
    const image = progressBoxRef.current.querySelector('.imgarea img')

    if (yearText && buildingText && titleText && subtitleText && image) {
      gsap.set([yearText, buildingText, titleText, subtitleText], {
        opacity: 1,
        y: 0,
      })

      yearText.textContent = years[validIndex]
      buildingText.textContent = titles[validIndex]
      titleText.textContent = titles[validIndex]
      subtitleText.textContent = subtitles[validIndex]

      gsap.fromTo(
        [yearText, buildingText, titleText, subtitleText],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' }
      )

      gsap.to(image, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'power1.out',
        onComplete: () => {
          image.setAttribute(
            'src',
            images[validIndex] || '/images/placeholder.png'
          )
          gsap.to(image, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power1.out',
          })
        },
      })
    }
  }, [validIndex])

  const generateBubbles = (count: number) => {
    const colors = ['rgb(255, 149, 55)', 'rgb(255, 203, 157)']

    return new Array(count).fill(0).map((_, i) => {
      const side = Math.random()
      const left =
        side < 0.4
          ? Math.random() * 20
          : side > 0.6
            ? 80 + Math.random() * 20
            : Math.random() * 100

      const top = Math.random() * 100
      const size = 5 + Math.random() * 50 // 10px ~ 40px
      const opacity = 0.1 + Math.random() * 0.4
      const color = colors[Math.floor(Math.random() * colors.length)]

      return (
        <div
          key={i}
          className="bubble"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${color}, transparent)`,
            opacity,
          }}
        />
      )
    })
  }
  useEffect(() => {
    const bubbles = gsap.utils.toArray('.bubble')
    bubbles.forEach((bubble: any) => {
      gsap.to(bubble, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        duration: gsap.utils.random(4, 10),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, [])

  useEffect(() => {
    if (!progressBoxRef.current) return

    const progressBarInner = progressBoxRef.current.querySelector(
      `.${styles.progressbarInner}`
    ) as HTMLElement

    if (progressBarInner) {
      gsap.fromTo(
        progressBarInner,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: progressBoxRef.current,
            start: 'top+=4000 top',
            end: `+=${totalSteps * window.innerHeight}px`,
            scrub: true,
          },
        }
      )
    }
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className={`sec progress ${styles.progress}`} ref={ref}>
      {isClient && (
        <div className="bubblesContainer">{generateBubbles(10)}</div>
      )}
      <div ref={topGradientRef} className="gradientBg gradientTop" />
      <div ref={bottomGradientRef} className="gradientBg gradientBottom" />
      <section className="secInner">
        <div className="titleArea">
          <Image
            src="/images/section/PROGRESS.svg"
            width={693}
            height={158}
            alt="PROGRESS"
          />
          <h2 className="secTitle">これまでの軌跡</h2>
        </div>
        <section className={styles.progressArea}>
          <article
            className={`progressBox ${styles.progressBox}`}
            ref={progressBoxRef}
          >
            <div className={styles.textarea}>
              <div className={`progressYear ${styles.progressYear}`}>
                <p className="bunyan-bold">{years[validIndex]}</p>
              </div>
              <div className={`progressBuilding ${styles.progressBuilding}`}>
                <p className="progressTitle">{titles[validIndex]}</p>
                <p className="progressSubtitle">{subtitles[validIndex]}</p>
              </div>
            </div>
            <div className={styles.progressbar}>
              <div className={styles.progressbarInner}></div>
            </div>
            <div className={`imgarea ${styles.imgarea}`}>
              <figure>
                <Image
                  src={images[validIndex]}
                  width={296}
                  height={368}
                  alt={titles[validIndex]}
                />
              </figure>

              <div className={styles.imgareaText}>
                <span className="bunyan-regular">{enTitle[validIndex]}</span>
                <span></span>
                <span className="bunyan-regular">{`0${validIndex + 1}`}</span>
              </div>
              <div className={styles.bottomText}>
                <p className="bunyan-bold">{years[validIndex]}</p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Progress
