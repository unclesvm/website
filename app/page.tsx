'use client'

import Image from 'next/image'
import Link from 'next/link'
import Message from './components/message'
import { useEffect } from 'react'
import anime from 'animejs'

export default function Home() {
  const links = [
    {
      name: 'Github',
      href: 'https://github.com/shadsvm',
    },
  ]

  useEffect(() => {
    anime({
      targets: 'section',
      translateY: ['50', 0],
      opacity: [0, 1],
      delay: anime.stagger(250),
    })
  }, [])

  return (
    <main className="max-w-3xl mx-auto h-[100dvh] flex flex-col justify-center items-center  gap-5 px-3 sm:px-5">
      <section className="w-full flex justify-start items-center gap-4 sm:gap-6 ">
        <Image
          width="75"
          height="75"
          src="/memoji-wink.png"
          alt="Cartoon-style picuter of me"
          className="bg-white/20 shadow-lg rounded-full max-w-20"
        />

        <header>
          <h1 className="text-xl sm:text-4xl font-semibold ">
            Samuel Kaminski
          </h1>
          <h2 className="dark:text-stone-300 sm:text-lg">
            Full Stack Developer
          </h2>
        </header>
      </section>

      <section className="text-stone-500 text-xs text-justify tracking-wider px-4">
        driven by a passion for technology and a love for bringing ideas to
        life. I guide products from concept to launch with a thoughtful,
        hands-on approach.
      </section>
      <section className="w-full flex gap-2 flex-wrap ">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </section>

      <section className="flex flex-col gap-2 justify-start  items-end w-full">
        <Message />
      </section>
    </main>
  )
}
