"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import styles from "@/app/page.module.css"
import ProviderRedux from '@/components/ProviderRedux'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My app</title>
      </head>
     <ProviderRedux>
      <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          <main className={styles.main}>
              {children}
          </main>
        </body>
     </ProviderRedux>
    </html>
  )
}
