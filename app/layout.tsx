import type { Metadata } from 'next'
import './globals.css'
import { roboto_mono } from './fonts'

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
        <div className="max-w-2xl mx-auto dark:text-neutral-200">
          {children}
        </div>
      </body>
    </html>
  )
}
