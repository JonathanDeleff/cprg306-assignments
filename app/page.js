import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-1.5xl">
        CPRG 306: Web Development 2 - Assignments
      </div>
      <div><Link href="/week-2">Week 2</Link></div>
    </main>
  )
}
