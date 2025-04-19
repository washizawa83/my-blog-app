import Link from 'next/link'

export const HeadMenu = () => {
  return (
    <header className="fixed top-5 left-2 md:left-10">
      <Link href="/">
        <h1 className="text-3xl">blog</h1>
      </Link>
    </header>
  )
}
