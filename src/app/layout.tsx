import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Title and Description */}
      <title>Kaya Cannabis</title>
      <meta name="description" content="Queremos ofrecerte la mejor calidad al mejor precio y una experiencia que nunca olvidarás." />

      {/* SEO */}
      <meta property="og:title" content="Kaya Cannabis" />
      <meta property="og:description" content="Queremos ofrecerte la mejor calidad al mejor precio y una experiencia que nunca olvidarás." />

      {/* Twitter */}
      <meta name="twitter:title" content="Kaya Cannabis" />
      <meta name="twitter:description" content="Queremos ofrecerte la mejor calidad al mejor precio y una experiencia que nunca olvidarás." />

      {/* Favicon */}
      <link rel="icon" href="/cultivo.ico" />
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
