import { ComponentProps } from "react"

interface Icon {
  name: string
  showLabel?: boolean
}

export default function SimpleIcon({ name, showLabel }: Icon & ComponentProps<'div'>) {
  return (
    <div key={name} className={"text-neutral-800 dark:text-neutral-200 flex justify-start items-center gap-2"}>
      <img height="12" width="12" src={`https://cdn.simpleicons.org/${name}/black/AAAAAA`} alt={name} />
      {showLabel && <div className="text-xs">{name}</div>}
    </div>
  )
}
