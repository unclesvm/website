'use client'

import Image from 'next/image'
import Link from 'next/link'
import Message from './components/message'
import { useEffect } from 'react'
import anime from 'animejs'
import { File, Github, Linkedin, Mail } from 'lucide-react'

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
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sam-kmn',
      icon: Linkedin,
    },
    {
      label: 'Resume',
      href: '/md/resume',
      icon: File,
    },
    {
      label: 'hello@svm.engineer',
      href: 'mailto:hello@svm.engineer',
      icon: Mail,
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
    <main className="max-w-2xl mx-auto h-[100dvh] flex flex-col justify-center items-center  gap-7 px-3 sm:px-5">
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

      <section className="text-stone-500 text-justify tracking-wider px-4">
        driven by a passion for technology and a love for bringing ideas to
        life. I guide products from concept to launch with a thoughtful,
        hands-on approach.
      </section>
      <section className="w-full flex flex-col lg:flex-row gap-2 flex-wrap mt-4 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex justify-between items-centers gap-2 bg-neutral-700/55 hover:bg-neutral-700/90 max-w-min text-sm p-6 py-1.5 rounded shadow transition"
          >
            <link.icon size={16} />
            {link.label}
          </Link>
        ))}
        <Message {...{ messages }} />
      </section>
    </main>
  )
}
