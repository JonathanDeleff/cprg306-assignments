import Link from "next/link";
import { HomeButton } from "@/Components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Hello world!</div>
      <HomeButton/>
    </main>
  )
}
