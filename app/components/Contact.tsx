
const content = {
    website: {
      label: "svm.engineer",
      href: "https://svm.engineer"
    },
    email: {
      label: "samuel.kaminski@icloud.com",
      href: "mailto:samuel.kaminski@icloud.com"
    },
    github: {
      label: "unclesvm",
      href: "https://github.com/unclesvm"
    },
    linkedin: {
      label: "sam-kmn",
      href: "https://linkedin.com/in/sam-kmn"
    },
}

export default function ContactLinks() {
  return (
    <pre>
      <div className="text-neutral-800 dark:text-neutral-300">
        <span className="text-red-600 dark:text-red-500">const</span> contact = {"{"}
      {Object.entries(content).map(([key, value]) => (
        <div key={key}>
          <span className="text-cyan-600 dark:text-cyan-500">  {key}</span>: <a href={value.href} className="dark:text-emerald-500 text-green-700">{value.label}</a>,
        </div>
      ))}
      {"}"}
    </div>
    </pre>

  )
}
