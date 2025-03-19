import { Icon } from '@iconify/react';
import { ComponentPropsWithoutRef } from 'react';

const content = [
  [
    {name: "Languages"},
    {name: 'html5', label: 'html'},
    {name: 'css'},
    {name: 'javascript', label:'JS'},
    {name: 'typescript', label:'TS'},
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
  ],
  [
    {name: "Libraries"},
    {name: 'git'},
    {name: 'zod'},
    {name: 'redux'},
    {name: 'docker'},
    {name: 'prisma'},
    {name: 'drizzle'},
    {name: 'tailwindcss', label: 'tailwind'},
  ],
  [
    {name: "Database"},
    {name: 'vercel'},
    {name: 'redis'},
    {name: 'railway'},
    {name: 'mongodb'},
    {name: 'firebase'},
    {name: 'postgresql', label:'postgre'},
    {name: 'sqlite'},
  ],
]

export default function Skills(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className="flex overflow-hidden w-min h-min">
      {content.map((entry, index) => (
        <div
          key={index + entry.toString()}
          className="flex flex-col justify-start items-start max-w-xs uppercase border-l border-neutral-300 *:border-neutral-300 dark:border-neutral-800 dark:*:border-neutral-800"
        >
          {Object.values(entry).map(({name, label}) =>
            <div
              key={name}
              className='w-full flex justify-start items-center p-1 px-2 gap-1.5 first:bg-neutral-200 dark:first:bg-neutral-900 first:font-bold border-b last:border-0'
            >
              <Icon
                icon={'simple-icons:' + name}
                className='group-first:hidden w-2.5 h-2.5'
              />
              <div className='text-[8px] w-full'>{label || name}</div>
            </div>
          )}
        </div>
      ))}
    </div>

  )
}
