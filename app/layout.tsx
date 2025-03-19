import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { roboto_mono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samuel Kaminski',
  description: 'Samuel Kaminski - Full Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <div className="max-w-2xl lg:max-w-3xl mx-auto dark:text-neutral-200 ">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
