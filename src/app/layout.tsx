import type { Metadata } from 'next'
import './globals.css'
import '@/styles/common/reset.css'
import '@/styles/common/common.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Head from 'next/head'

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bizlink10周年記念サイト',
  description:
    '皆さまの夢と共に、未来へ。私たちの始まりは、間取り5坪の小さなオフィスでした。 そこから10年――。日本初のIT人材プラットフォーム企業として、独自性ある技術を磨きながら刻んできた年月。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/whe2ynk.css" />
      </Head>
      <body className={`${noto.className} body`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
