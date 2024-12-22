'use client'

import anime from 'animejs'
import Image from 'next/image'
import { useEffect } from 'react'
import Message from './components/message'
import Socials from './components/socials'

export default function Home() {
  const messages = [
    'Hi, do you need dev?',
    'I can build your ideas',
    'Lets get in touch 🤙',
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
    <main className="h-[100dvh] flex flex-col justify-center items-center  gap-7 px-5">
      <section className="w-full flex justify-start items-center gap-4 sm:gap-6 ">
        <Image
          width="75"
          height="75"
          src="/memoji-wink.png"
          alt="Cartoon-style picuter of me"
          className="bg-neutral-800 shadow-lg rounded-full max-w-16 md:max-w-20"
        />

        <header>
          <h1 className="text-2xl sm:text-4xl font-semibold ">
            Samuel Kaminski
          </h1>
          <h2 className="dark:text-stone-300 sm:text-lg">
            Full Stack Developer
          </h2>
        </header>
      </section>

      <section className="text-stone-500 text-justify tracking-wider px-4">
        Driven by a passion for technology and a love for bringing ideas to
        life. I guide products from concept to launch with a thoughtful,
        hands-on approach.
      </section>

      <Socials />
      <Message {...{ messages }} />
    </main>
  )
}
