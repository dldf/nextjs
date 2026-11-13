import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is my second page.</p>
      <Link href="/">Back to home</Link>
    </main>
  )
}