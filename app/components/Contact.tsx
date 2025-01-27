
const content = {
    website: {
      label: "svm.engineer",
      href: "https://svm.engineer"
    },
    email: {
      label: "mail@svm.engineer",
      href: "mailto:mail@svm.engineer"
    },
    github: {
      label: "shadsvm",
      href: "https://github.com/shadsvm"
    },
    linkedin: {
      label: "sam-kmn",
      href: "https://linkedin.com/in/sam-kmn"
    },
}

export default function ContactLinks() {
  return (
    <pre>
      <div><span className="text-red-500">const</span> contact = {"{"} </div>
      {Object.entries(content).map(([key, value]) => (
        <div key={key}>
          <span className="text-cyan-500">  {key}</span>: <a href={value.href} className="text-emerald-500">{value.label}</a>,
        </div>
      ))}
      <div>{"}"}</div>
    </pre>

  )
}
