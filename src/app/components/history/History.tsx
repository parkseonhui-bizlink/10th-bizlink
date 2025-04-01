'use client'

import styles from '@/styles/history/history.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const History = ({
  ref,
  spRef,
}: {
  ref?: React.Ref<HTMLDivElement>
  spRef?: React.Ref<HTMLDivElement>
}) => {
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
  return (
    <section className="sec history blue">
      <div ref={topGradientRef} className="gradientBg gradientTop" />
      <div ref={bottomGradientRef} className="gradientBg gradientBottom" />
      {/* PC */}
      <section className={`${styles.sectionPC} secInner`}>
        <article className="container" ref={ref}>
          <div className={`${styles.titlePC} titleArea`}>
            <Image
              src="/images/section/HISTORY.svg"
              width={693}
              height={158}
              alt="HISTORY"
            />
            <h2 className="secTitle">創業から10年間の軌跡</h2>
          </div>

          {/* 2015 */}
          <div className={`${styles.year2015} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2015.svg" alt="2015" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    4<span>月</span>
                  </p>
                  <p className={styles.text}>
                    初月黒字化
                    <br />
                    1人目の社員入社
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2015_1.png"
                  alt="初月黒字化1人目の社員入社"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    3ヶ月で
                    <br />
                    競合企業に転職
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2015_3.png"
                  alt="3ヶ月で競合企業に転職"
                />
              </div>
            </div>
          </div>

          {/* 2016 */}
          <div className={`${styles.year2016} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2016.svg" alt="2016" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    Bizlink β版
                    <br />
                    ローンチ
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2016_1.png"
                  alt="Bizlink β版ローンチ"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>

          {/* 2017 */}
          <div className={`${styles.year2017} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2017.svg" alt="2017" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>
                    IT導入補助金爆発
                    <br />
                    クラウドファンディング爆発
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2017_1.png"
                  alt="IT導入補助金爆発クラウドファンディング爆発"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>
          {/* 2018 */}
          <div className={`${styles.year2018} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2018.svg" alt="2018" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}></div>
            <div className={`${styles.historyArea} ${styles.down}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    補助金採択ほぼゼロ
                    <br />
                    赤字400万 残金1,000万 <br />
                    オフィスダウンサイジング
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2018_1.png"
                  alt="Bizlink β版ローンチ"
                />
              </div>
            </div>
          </div>
          {/* 2019 */}
          <div className={`${styles.year2019} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2019.svg" alt="2019" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    4<span>月</span>
                  </p>
                  <p className={styles.text}>ビズフリに全振り開始</p>
                </div>
                <img
                  src="/images/section/historySection/2019_2.png"
                  alt="ビズフリに全振り開始"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    3<span>月</span>
                  </p>
                  <p className={styles.text}>堀江ジョイン</p>
                </div>
                <img
                  src="/images/section/historySection/2019_1.png"
                  alt="堀江ジョイン"
                />
              </div>
            </div>
          </div>
          {/* 2020 */}
          <div className={`${styles.year2020} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2020.svg" alt="2020" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    11<span>月</span>
                  </p>
                  <p className={styles.text}>李ジョイン</p>
                </div>
                <img
                  src="/images/section/historySection/2020_1.png"
                  alt="李ジョイン"
                />
              </div>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    12<span>月</span>
                  </p>
                  <p className={styles.text}>
                    コロナ融資8,000万円
                    <br />
                    クラファン8,000万円
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2020_2.png"
                  alt="コロナ融資8,000万円 クラファン8,000万円"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>
          {/* 2021 */}
          <div className={`${styles.year2021} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2021.svg" alt="2021" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>ビズプロ再開</p>
                </div>
                <img
                  src="/images/section/historySection/2021_1.png"
                  alt="ビズプロ再開"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>
          {/* 2022 */}
          <div className={`${styles.year2022} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2022.svg" alt="2022" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    5<span>月</span>
                  </p>
                  <p className={styles.text}>
                    ビズキャリ開始 <br />
                    社団設立
                  </p>
                </div>
                <img
                  src="/images/section/historySection/2022_1.png"
                  alt="ビズキャリ開始社団設立"
                />
              </div>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    11<span>月</span>
                  </p>
                  <p className={styles.text}>大阪支社設立</p>
                </div>
                <img
                  src="/images/section/historySection/2022_2.png"
                  alt="大阪支社設立"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>
          {/* 2023 */}
          <div className={`${styles.year2023} panel`}>
            <figure className={styles.yearImg}>
              <img src="/images/section/historySection/2023.svg" alt="2023" />
            </figure>
            <div className={`${styles.historyArea} ${styles.up}`}>
              <div className={styles.historybox}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>ビズウェル開校</p>
                </div>
                <img
                  src="/images/section/historySection/2023_1.png"
                  alt="ビズウェル開校"
                />
              </div>
            </div>
            <div className={`${styles.historyArea} ${styles.down}`}></div>
          </div>
        </article>
      </section>
      {/* SP */}
      <section className={`${styles.sectionSP} secInner`} ref={spRef}>
        <article className={styles.containerSP}>
          <div className="titleArea">
            <Image
              src="/images/section/HISTORY.svg"
              width={693}
              height={158}
              alt="HISTORY"
            />
            <h2 className="secTitle">創業から10年間の軌跡</h2>
          </div>
          <div className={styles.historyAreaSP}>
            <div className={styles.year2015SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2015.svg" alt="2015" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    4<span>月</span>
                  </p>
                  <p className={styles.text}>
                    初月黒字化
                    <br />
                    1人目の社員入社
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2015_1.png"
                    alt="初月黒字化1人目の社員入社"
                  />
                </div>
              </div>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    3ヶ月で
                    <br />
                    競合企業に転職
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2015_3.png"
                    alt="3ヶ月で競合企業に転職"
                  />
                </div>
              </div>
            </div>
            {/* 2016 */}
            <div className={styles.year2016SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2016.svg" alt="2016" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    Bizlink β版
                    <br />
                    ローンチ
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2016_1.png"
                    alt="Bizlink β版ローンチ"
                  />
                </div>
              </div>
            </div>

            {/* 2017 */}
            <div className={styles.year2017SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2017.svg" alt="2017" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>
                    IT導入補助金爆発
                    <br />
                    クラウドファンディング爆発
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2017_1.png"
                    alt="IT導入補助金爆発クラウドファンディング爆発"
                  />
                </div>
              </div>
            </div>
            {/* 2018 */}
            <div className={styles.year2018SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2018.svg" alt="2018" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    6<span>月</span>
                  </p>
                  <p className={styles.text}>
                    補助金採択ほぼゼロ
                    <br />
                    赤字400万 残金1,000万 <br />
                    オフィスダウンサイジング
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2018_1.png"
                    alt="Bizlink β版ローンチ"
                  />
                </div>
              </div>
            </div>
            {/* 2019 */}
            <div className={styles.year2019SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2019.svg" alt="2019" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    3<span>月</span>
                  </p>
                  <p className={styles.text}>堀江ジョイン</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2019_1.png"
                    alt="堀江ジョイン"
                  />
                </div>
              </div>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    4<span>月</span>
                  </p>
                  <p className={styles.text}>ビズフリに全振り開始</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2019_2.png"
                    alt="ビズフリに全振り開始"
                  />
                </div>
              </div>
            </div>
            {/* 2020 */}
            <div className={styles.year2020SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2020.svg" alt="2020" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    11<span>月</span>
                  </p>
                  <p className={styles.text}>李ジョイン</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2020_1.png"
                    alt="李ジョイン"
                  />
                </div>
              </div>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    12<span>月</span>
                  </p>
                  <p className={styles.text}>
                    コロナ融資8,000万円
                    <br />
                    クラファン8,000万円
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2020_2.png"
                    alt="コロナ融資8,000万円 クラファン8,000万円"
                  />
                </div>
              </div>
            </div>
            {/* 2021 */}
            <div className={styles.year2021SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2021.svg" alt="2021" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>ビズプロ再開</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2021_1.png"
                    alt="ビズプロ再開"
                  />
                </div>
              </div>
            </div>
            {/* 2022 */}
            <div className={styles.year2022SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2022.svg" alt="2022" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    5<span>月</span>
                  </p>
                  <p className={styles.text}>
                    ビズキャリ開始 <br />
                    社団設立
                  </p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2022_1.png"
                    alt="ビズキャリ開始社団設立"
                  />
                </div>
              </div>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    11<span>月</span>
                  </p>
                  <p className={styles.text}>大阪支社設立</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2022_2.png"
                    alt="大阪支社設立"
                  />
                </div>
              </div>
            </div>
            {/* 2023 */}
            <div className={styles.year2023SP}>
              <figure className={styles.yearImg}>
                <img src="/images/section/historySection/2023.svg" alt="2023" />
              </figure>
              <div className={`${styles.historyboxSP} historyboxSP`}>
                <i className={styles.maruten}></i>
                <div className={styles.textArea}>
                  <p className={styles.month}>
                    8<span>月</span>
                  </p>
                  <p className={styles.text}>ビズウェル開校</p>
                </div>
                <div className={styles.historyImagBox}>
                  <img
                    src="/images/section/historySection/2023_1.png"
                    alt="ビズウェル開校"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}

export default History
