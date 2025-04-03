import type { Metadata } from 'next'
import Top from './Top'

export const metadata: Metadata = {
  title: 'Bizlink10周年記念サイト',
  description:
    '皆さまの夢と共に、未来へ。日本初のIT人材プラットフォーム企業として、独自性ある技術を磨きながら刻んできた年月。',
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

export default function Home() {
  return <Top />
}
