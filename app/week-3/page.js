"use client";
import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";
import { itemList } from "@/Components/item-list";
import { useState } from "react";

const itemsData = itemList;


export default function Home() {
  const [items, setItems] = useState(itemsData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl">Shopping List:</h1>
      <div>
        <Item items={items}/>
      </div>
      <div>
        <HomeButton />
      </div>
    </main>
  );
}
