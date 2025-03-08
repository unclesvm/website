export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="p-5 my-12 mx-auto prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs prose-h6:font-normal  dark:prose-headings:text-white">
      {children}
    </div>
  )
}
