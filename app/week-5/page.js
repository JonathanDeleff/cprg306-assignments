"use client";
import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Item/>
      <HomeButton/>
    </main>  
  );
}
