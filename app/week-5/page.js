"use client";
import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";
import { itemList } from "@/Components/item-list";
import { useState } from "react";

export default function Page() {
  
  const itemsData = itemList;
  const [items, setItems] = useState(itemsData);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Item items={items}/>
      <HomeButton/>
    </main>  
  );
}
