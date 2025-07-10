'use client'

import { DefaultSeo } from 'next-seo'

export default function DefaultSeoClient() {
  return (
    <DefaultSeo
      titleTemplate="%s | Neptel"
      defaultTitle="Neptel"
      description="Enterprise AI Infrastructure"
      canonical="https://your-domain.com/"
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: 'https://your-domain.com/',
        siteName: 'Neptel',
      }}
      twitter={{
        handle: '@yourhandle',
        site: '@yourhandle',
        cardType: 'summary_large_image',
      }}
    />
  )
}
