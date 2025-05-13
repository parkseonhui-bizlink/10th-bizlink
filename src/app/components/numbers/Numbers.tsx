'use client'
import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '@/styles/number/number.module.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const revenuedata = [
  { revenue: '', year: '2019', value: 3 },
  { revenue: '', year: '2020', value: 5 },
  { revenue: '', year: '2021', value: 7 },
  { revenue: '8.70億', year: '2022', value: 8.7 },
  { revenue: '', year: '2023', value: 10 },
  { revenue: '17.7億', year: '2024', value: 20 },
]

const avgAgedata = [
  { name: '20代', value: 57, color: '#2962FF' },
  { name: '30代', value: 21, color: '#90CAF9' },
  { name: '', value: 22, color: '#BBDEFB' },
]

gsap.registerPlugin(ScrollTrigger)

const Numbers = () => {
  const [isClient, setIsClient] = useState(false)

  const [animated, setAnimated] = useState(false)

  const chartRef = useRef<HTMLDivElement>(null)
  const [chartReady, setChartReady] = useState(false)

  const topGradientRef = useRef(null)
  const bottomGradientRef = useRef(null)

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    percent: number
    index: number
  }) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={18}
        fontWeight={600}
      >
        {avgAgedata[index].name !== '' && (
          <>
            <tspan x={x} dy=".4em">{`${Math.round(percent * 100)}%`}</tspan>
          </>
        )}
      </text>
    )
  }

  const generateBubbles = (count: number) => {
    const colors = ['rgb(207, 236, 255)', 'rgb(138, 208, 255)']

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
    if (topGradientRef.current && bottomGradientRef.current) {
      gsap.to(topGradientRef.current, {
        y: 100,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: topGradientRef.current,
          start: 'top top',
          end: '+=100vh',
          scrub: true,
        },
      })

      gsap.to(bottomGradientRef.current, {
        y: -100,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: bottomGradientRef.current,
          start: 'top top',
          end: '+=100vh',
          scrub: true,
        },
      })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartReady(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (chartRef.current) observer.observe(chartRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isClient) return
    const bars = document.querySelectorAll('.barWrapper .bar')

    bars.forEach((bar) => {
      const height = bar.getAttribute('data-height') || '0'
      gsap.fromTo(
        bar,
        { height: '0%' },
        {
          height: `${height}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })
    const targets = document.querySelectorAll('.animated-number')

    targets.forEach((el) => {
      const value = parseFloat(el.getAttribute('data-value') || '0')
      const obj = { progress: 0 }

      gsap.to(obj, {
        progress: value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
          markers: false,
        },
        onUpdate: () => {
          el.textContent =
            value % 1 === 0
              ? Math.round(obj.progress).toString()
              : obj.progress.toFixed(1)
        },
        onComplete: () => {
          el.textContent = value.toString()
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [isClient])

  useEffect(() => {
    setAnimated(true)
  }, [])
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="sec number blue">
      {isClient && (
        <div className="bubblesContainer">{generateBubbles(40)}</div>
      )}
      <div ref={topGradientRef} className="gradientBg gradientTop" />
      <div ref={bottomGradientRef} className="gradientBg gradientBottom" />
      <section className="secInner">
        <div className="titleArea">
          <Image
            src="/images/section/NEMBER.svg"
            width={609}
            height={155}
            alt="NEMBER"
          />
          <h2 className="secTitle">数字でみるビズリンク</h2>
        </div>
        <p className={styles.numyear}>※数字でみるビズリンク（2024年3月）</p>
        <article className={styles.dashboard}>
          <div className={`${styles.box} ${styles.anniversary}`}>
            <h3>創業</h3>
            <div className={styles.anniversaryBox}>
              <div className={styles.numberArea}>
                <span className={styles.highlight}>10</span>
                <span className={styles.verticalText}>周年</span>
              </div>
              <span className={styles.subText}>2025年度</span>
            </div>
          </div>

          <div className={`${styles.box} ${styles.profit}`}>
            <h3>純利益</h3>
            <figure className={styles.profitIcon}>
              <Image
                src="/images/section/numberSection/profit.svg"
                width={107}
                height={125}
                alt="純利益"
              />
            </figure>
            <div className={styles.numberArea}>
              <span
                className={`${styles.highlight} animated-number`}
                data-value="1184"
              >
                0
              </span>
              <span className={styles.subText}>万円（黒字転換）</span>
            </div>
            <p className={styles.smTxt}>※2024年3月期</p>
          </div>

          <div className={`${styles.box} ${styles.revenue}`}>
            <h3>売上高</h3>
            <div className={styles.revenueArea}>
              <div className={styles.numberArea}>
                <figure className={styles.revenueIcon}>
                  <Image
                    src="/images/section/numberSection/revenue.svg"
                    width={158}
                    height={122}
                    alt="売上高"
                  />
                </figure>
                <div className={styles.revenueText}>
                  <div className={styles.revenueTextBox}>
                    <span className={styles.subText}>売上</span>
                    <span
                      className={`${styles.highlight} animated-number`}
                      data-value="17.7"
                    >
                      0
                    </span>
                    <span className={styles.subText}>億</span>
                  </div>
                </div>
              </div>
              <div className={styles.chartContainer}>
                {revenuedata.map((item, index) => (
                  <div key={index} className="barWrapper">
                    <span>{item.revenue}</span>
                    <div
                      className={`bar ${animated ? styles.animated : ''}`}
                      data-height={`${(item.value / 18) * 100}`}
                    />
                    <span className={styles.label}>{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.box} ${styles.users}`}>
            <h3>登録者数</h3>
            <div className={styles.numberArea}>
              <div className={styles.usersIcon}>
                <Image
                  src="/images/section/numberSection/users.svg"
                  width={168}
                  height={146}
                  alt="登録者数"
                />
              </div>
              <div className={styles.usersText}>
                <span
                  className={`${styles.highlight} animated-number`}
                  data-value="15000"
                >
                  0
                </span>
                <span className={styles.subText}>名</span>
              </div>
            </div>
          </div>

          <div className={`${styles.box} ${styles.projects}`}>
            <h3>案件数</h3>
            <div className={styles.numberArea}>
              <div className={styles.projectsIcon}>
                <Image
                  src="/images/section/numberSection/projects.svg"
                  width={156}
                  height={177}
                  alt="案件数"
                />
              </div>
              <span
                className={`${styles.highlight} animated-number`}
                data-value="5000"
              >
                0
              </span>
              <span className={styles.subText}>件</span>
            </div>
          </div>

          <div className={`${styles.box} ${styles.employees}`}>
            <h3>社員数</h3>
            <div className={styles.numberArea}>
              <div className={styles.employeesIcon}>
                <Image
                  src="/images/section/numberSection/employees.svg"
                  width={156}
                  height={177}
                  alt="案件数"
                />
              </div>
              <div className={styles.numberAreaBox}>
                <span
                  className={`${styles.highlight} animated-number`}
                  data-value="57"
                >
                  0
                </span>
                <span className={styles.subText}>名</span>
              </div>
            </div>
          </div>

          <div className={`${styles.box} ${styles.avgAge}`}>
            <h3>平均年齢</h3>
            <div className={styles.numberArea}>
              <div
                ref={chartRef}
                className={styles.avgAgeChartWrapper}
                style={{ minWidth: 180, minHeight: 180 }}
              >
                {chartReady && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={avgAgedata}
                        cx="50%"
                        cy="50%"
                        innerRadius="30%"
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={-270}
                        fill="#8884d8"
                        paddingAngle={3}
                        dataKey="value"
                        stroke="white"
                        strokeWidth={2}
                        label={renderCustomizedLabel}
                        labelLine={false}
                      >
                        {avgAgedata.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                )}
                <div
                  style={{
                    position: 'absolute',
                    left: '-35px',
                    top: 'calc(50% + 35%)',
                    transform: 'translateY(-50%)',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                    color: '#002366',
                  }}
                >
                  30代
                </div>
                <div
                  style={{
                    position: 'absolute',
                    right: '-40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                    color: '#002366',
                  }}
                >
                  20代
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.box} ${styles.gender}`}>
            <h3>男女比率</h3>
            <div className={styles.numberArea}>
              <div className={styles.genderIcon}>
                <Image
                  src="/images/section/numberSection/gender.svg"
                  width={228}
                  height={136}
                  alt="男女比率"
                />
              </div>
              <span className={styles.highlight}>4:6</span>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Numbers
