import React from 'react'
import '@/styles/common/header.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="header">
      <article>
        <div className="logoArea">
          <Image
            src="/images/bizlink_group_w.svg"
            width={227}
            height={50}
            alt="Bizlink Group"
          />
        </div>
        <nav>
          <div className="hamberger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </article>
    </header>
  )
}

export default Header
