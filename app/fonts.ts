import { Poppins, Roboto_Mono } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  // variable: '--font-poppins',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  // variable: '--font-poppins',
})
