import SimpleIcon from "./SimpleIcon"

const content = {
  "Programming languages": ["css", "html5", "javascript", "typescript", "python"],
  "Frameworks": ["react", "next.js", "vue.js", "nuxt", "astro", "hono"],
  "Tools": ["git", "tailwindcss", "redux", "prisma", "docker", "firebase"],
  "JS Runtime": ["node.js", "bun"],
}

export default function Skills() {
  return (
    <div className="space-y-10 ">
      {Object.entries(content).map(([key, value]) => (
        <div key={key} className="border-b border-gray-800">
          {key}
            <div className="flex justify-start items-center h-10 uppercase gap-8">
              {value.map((name) =>
                <SimpleIcon key={name} name={name} showLabel />
              )}
            </div>
        </div>
      ))}
    </div>

  )
}
