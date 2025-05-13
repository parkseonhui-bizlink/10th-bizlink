'use client'
import React, { useEffect, useRef, useState } from 'react'
import FV from './components/fv/FV'
import History from './components/history/History'
import Progress from './components/progress/Progress'
import Numbers from './components/numbers/Numbers'
import FromTheCeo from './components/fromtheceo/FromTheCeo'
import Message from './components/message/Message'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Top = () => {
  const historyRef = useRef<HTMLDivElement | null>(null)
  const historySPRef = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const numbersRef = useRef<HTMLDivElement | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const totalSteps = 8

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ctx = gsap.context(() => {
      const historyContainer = historyRef.current
      if (historyContainer) {
        let sections = Array.from(
          historyContainer.querySelectorAll('.panel')
        ) as HTMLElement[]

        let totalWidth = sections.reduce(
          (acc, section) => acc + section.getBoundingClientRect().width,
          0
        )
        historyContainer.style.width = `${totalWidth}px`

        gsap.to(historyContainer, {
          x: () => -(totalWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: historyContainer,
            pin: true,
            scrub: 1.5,
            snap: {
              snapTo: (progress) => {
                let sectionOffsets = sections.map(
                  (s) => s.offsetLeft / totalWidth
                )
                return gsap.utils.snap(sectionOffsets, progress)
              },
              duration: 0.8,
            },
            end: `+=${totalWidth - window.innerWidth}`,
          },
        })
        if (window.innerWidth < 768 && historySPRef.current) {
          const spBoxes = historySPRef.current.querySelectorAll(
            '.historyboxSP'
          ) as NodeListOf<HTMLElement>

          spBoxes.forEach((box) => {
            gsap.fromTo(
              box,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: box,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            )
          })
        }
      }

      const progressContainer = progressRef.current
      if (progressContainer) {
        if (window.innerWidth >= 640) {
          let lastIndex = -1
          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: progressContainer,
                start: 'top top',
                end: `+=${totalSteps * window.innerHeight}px`,
                scrub: 3,
                pin: true,
                snap: {
                  snapTo: (progress) =>
                    gsap.utils.snap(1 / (totalSteps - 1), progress),
                  duration: 1.2,
                },
                onUpdate: (self) => {
                  const newIndex = Math.round(self.progress * (totalSteps - 1))
                  if (newIndex !== lastIndex) {
                    setActiveIndex(newIndex)
                    lastIndex = newIndex
                  }
                },
              },
            }
          )
        } else {
          // const spacer = document.createElement('div')
          // spacer.style.height = `${totalSteps * 80}vh`
          // progressContainer.appendChild(spacer)
          return
        }
      }
      if (numbersRef.current) {
        const targets = numbersRef.current.querySelectorAll(
          '.animated-number'
        ) as NodeListOf<HTMLElement>

        const bars = numbersRef.current.querySelectorAll(
          '.barWrapper .bar'
        ) as NodeListOf<HTMLElement>

        targets.forEach((el) => {
          const value = parseFloat(el.dataset.value!) || 0
          const animationObj = { progress: 0 }

          gsap.to(animationObj, {
            progress: value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: numbersRef.current,
              start: 'top 70%',
              once: true,
            },
            onUpdate: function () {
              el.textContent =
                value % 1 === 0
                  ? Math.round(animationObj.progress).toString()
                  : animationObj.progress.toFixed(1)
            },
            onComplete: function () {
              el.textContent = value.toString()
            },
          })
        })

        gsap.fromTo(
          bars,
          { height: '0%' },
          {
            height: (index, target) =>
              `${parseFloat(target.getAttribute('data-height') || '0')}%`,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: numbersRef.current,
              start: 'top 70%',
              once: true,
            },
          }
        )
      }

      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 500)
    })

    return () => ctx.revert()
  }, [])

  return (
    <section>
      <FV />
      <Message />
      <History ref={historyRef} spRef={historySPRef} />
      <Progress
        ref={progressRef}
        spRef={historySPRef}
        activeIndex={activeIndex}
      />
      <Numbers />
      <FromTheCeo />
    </section>
  )
}

export default Top
