'use client'

import Image from 'next/image'
import Link from 'next/link'
import Message from './components/message'
import { useEffect } from 'react'
import anime from 'animejs'
import { siFiles, siGithub, siLinkedin, siMailgun } from 'simple-icons'

export default function Home() {
  const messages = [
    'Hi there, looking for dev?',
    'Let me build your ideas',
    'Send message, I will respond asap',
  ]

  const links = [
    {
      label: 'Github',
      href: 'https://github.com/shadsvm',
      icon: siGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sam-kmn',
      icon: siLinkedin,
    },
    {
      label: 'Resume',
      href: '/resume',
      icon: siFiles,
    },
    {
      label: 'Mail',
      href: 'mailto:mailf@svm.engineer',
      icon: siMailgun,
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
    <main className="h-[100dvh] flex flex-col justify-center items-center  gap-7 px-5">
      <section className="w-full flex justify-start items-center gap-4 sm:gap-6 ">
        <Image
          width="75"
          height="75"
          src="/memoji-wink.png"
          alt="Cartoon-style picuter of me"
          className="bg-white/20 shadow-lg rounded-full max-w-16 md:max-w-20"
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

      <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 my-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="min-w-full flex justify-center items-center gap-2 p-6 py-2 text-sm rounded shadow transition  bg-neutral-700/55 hover:bg-neutral-700/90"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d={link.icon.path} />
            </svg>
            {link.label}
          </Link>
        ))}
      </section>
      <Message {...{ messages }} />
    </main>
  )
}
