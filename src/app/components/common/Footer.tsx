import React from 'react'
import '@/styles/common/footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footerArticle">
        <div className="footerLinkArea">
          <p className="footerTitleText">ビズリンクフリーランス</p>
          <span className="footerTitleSubText">新しい働き方に導く</span>
          <ul className="linkList">
            <li>
              <a href="" target="_blank">
                Media
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                AI特化
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                友たちキャンペーン
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerLinkArea">
          <p className="footerTitleText">ビズリンクプロシェアリング</p>
          <span className="footerTitleSubText">専門家副業支援</span>
          <ul className="linkList">
            <li>
              <a href="" target="_blank">
                法人向け
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                個人向け
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerLinkArea">
          <p className="footerTitleText">ビズリンクキャリア</p>
          <span className="footerTitleSubText">成長企業への転職支援</span>
          <ul className="linkList">
            <li>
              <a href="" target="_blank">
                コーポレートサイト
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                リレキー
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerLinkArea">
          <p className="footerTitleText">ビズリンクウェルビーイング</p>
          <span className="footerTitleSubText">就労移行支援</span>
          <ul className="linkList">
            <li>
              <a href="" target="_blank">
                コーポレートサイト
                <Image
                  className="arrow"
                  src="/images/footer_arrow.svg"
                  width={8}
                  height={8}
                  alt="→"
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
      <article>
        <div className="footerImageArea">
          <Image
            src="/images/bizlink_group_w.svg"
            width={227}
            height={50}
            alt="Bizlink Group"
          />
        </div>
        <p className="copyright">
          <span>
            Copyright (C) 2025 Bizlink prosharing All Rights Reserved.
          </span>
        </p>
      </article>
    </footer>
  )
}

export default Footer
