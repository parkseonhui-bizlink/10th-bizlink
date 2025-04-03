import type { Metadata } from 'next'
import './globals.css'
import '@/styles/common/reset.css'
import '@/styles/common/common.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bizlink10周年記念サイト',
  description:
    '皆さまの夢と共に、未来へ。私たちの始まりは、間取り5坪の小さなオフィスでした。 そこから10年――。日本初のIT人材プラットフォーム企業として、独自性ある技術を磨きながら刻んできた年月。',
  openGraph: {
    title: 'Bizlink10周年記念サイト',
    description:
      '皆さまの夢と共に、未来へ。日本初のIT人材プラットフォーム企業として、独自性ある技術を磨きながら刻んできた年月。',
    url: 'https://10th.bizlink.io/',
    siteName: 'Bizlink',
    images: [
      {
        url: 'https://10th.bizlink.io/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bizlink10周年記念ビジュアル',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizlink10周年記念サイト',
    description:
      '皆さまの夢と共に、未来へ。IT人材プラットフォーム企業として歩んできた10年。',
    images: ['https://10th.bizlink.io/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/whe2ynk.css" />
      </head>
      <body className={`${noto.className} body`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
