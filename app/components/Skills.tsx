import SimpleIcon from "./SimpleIcon"

const content = {
  "Programming languages": ["html5", "css", "javascript", "typescript", "python"],
  "Frameworks": ["react", "next.js", "vue.js", "nuxt", "astro", "hono"],
  "Tools": ["git", "tailwindcss", "redux", "prisma", "docker", "firebase"],
  "Runtime": ["node.js", "bun"],
}

export default function Skills() {
  return (
    <div className="space-y-10 ">
      {Object.entries(content).map(([key, value]) => (
        <div key={key} className="border-b border-neutral-200 dark:border-neutral-700">
          <strong>{key}</strong>
            <div className="flex justify-normal gap-10 items-center h-10 uppercase">
              {value.map((name) =>
                <SimpleIcon key={name} name={name} showLabel />
              )}
            </div>
        </div>
      ))}
    </div>

  )
}
