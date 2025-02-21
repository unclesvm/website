import { Icon } from '@iconify/react';

const content = [
  [
    {name: "Languages"},
    {name: 'html5', label: 'html'},
    {name: 'css'},
    {name: 'javascript'},
    {name: 'typescript'},
    {name: 'python'},
    {name: 'json'},
  ],
  [
    {name: "Frameworks"},
    {name: 'bun'},
    {name: 'nodedotjs', label: 'node'},
    {name: 'vuedotjs', label: 'vue'},
    {name: 'nuxtdotjs', label: 'nuxt'},
    {name: 'nextdotjs', label: 'next'},
    {name: 'react'},
    {name: 'astro'},
    {name: 'hono'},
  ],
  [
    {name: "Tools"},
    {name: 'git'},
    {name: 'zod'},
    {name: 'figma'},
    {name: 'redux'},
    {name: 'docker'},
    {name: 'prisma'},
    {name: 'drizzle'},
    {name: 'tailwindcss', label: 'tailwind'},
  ],
  [
    {name: "DB & Hosting"},
    {name: 'vercel'},
    {name: 'redis'},
    {name: 'railway'},
    {name: 'mongodb'},
    {name: 'firebase'},
    {name: 'postgresql'},
    {name: 'planetscale'},

  ],
]

export default function Skills() {
  return (
    <div className="flex border border-neutral-600 dark:border-neutral-500 rounded divide-x overflow-hidden">
      {content.map((entry, index) => (
        <div key={index + entry.toString()} className=" flex flex-col justify-start divide-neutral-200 dark:divide-neutral-800 divide-y items-start  uppercase  border-neutral-200 dark:border-neutral-700 max-w-xs w-full">
          {Object.values(entry).map(({name, label}) =>
            <div key={name} className='first:bg-neutral-300 dark:first:bg-neutral-900 first:font-bold first:text-sm tracking-wide text-xs w-full flex justify-start items-center !p-3 gap-2 '>
              <Icon icon={'simple-icons:' + name} className='w-3 h-3' />
              <div className=''>{label || name}</div>
            </div>
          )}
        </div>
      ))}
    </div>

  )
}
