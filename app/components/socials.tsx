import Link from 'next/link'
import { siGithub, siLinkedin, siFiles, siMailgun } from 'simple-icons'

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
    href: 'mailto:mail@svm.engineer',
    icon: siMailgun,
  },
]

export default function Socials() {
  return (
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
  )
}
