"use client";
import { HomeButton } from "@/Components/buttons";
import { NewItem } from "@/Components/new-item";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">    
      <NewItem/>
      <HomeButton/>
    </main>
  )
}
