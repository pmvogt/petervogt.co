export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl md:leading-14 font-serif leading-9 text-gray-900 dark:text-gray-100 sm:leading-10">
      {children}
    </h1>
  )
}
