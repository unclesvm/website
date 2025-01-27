
interface Icon {
  name: string
  showLabel?: boolean
}

export default function Icon({name, showLabel}: Icon) {
  return (
    <div key={name} className="text-sm text-neutral-800 dark:text-neutral-200 flex justify-start items-center gap-2">
      <img height="12" width="12" src={`https://cdn.simpleicons.org/${name}/black/AAAAAA`} alt={name} />
      {showLabel && <div className="">{name}</div>}
    </div>
  )
}
