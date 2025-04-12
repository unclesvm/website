import { ComponentPropsWithoutRef } from "react"

const content = {

  email: {
    label: "samuel.kaminski.dev@gmail.com",
    href: "mailto:samuel.kaminski.dev@gmail.com"
  },
  phone: {
    label: "(+48) 530 643 361",
    href: "telto:+48530643361"
  },
  website: {
    label: "svm.engineer",
    href: "https://svm.engineer"
  },
  linkedin: {
    label: "sam-kmn",
    href: "https://linkedin.com/in/sam-kmn"
  },
  github: {
    label: "unclesvm",
    href: "https://github.com/unclesvm"
  },
}

export default function ContactLinks(props: ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre {...props}>
      <div className="text-neutral-800 dark:text-neutral-300 text-xs">
        <span className="text-red-800 dark:text-red-500">const</span> contact = {"{"}
        {Object.entries(content).map(([key, value]) => (
          <div key={key}>
            <span className="text-cyan-700 dark:text-cyan-500">  {key}</span>: <a href={value.href} className="dark:text-emerald-500 text-indigo-700">{value.label}</a>,
          </div>
        ))}
        {"}"}
      </div>
    </pre>

  )
}
