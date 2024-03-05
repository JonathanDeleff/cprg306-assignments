"use client";
import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";
import { NewItem } from "@/Components/new-item";
import { useState } from "react";
import { itemList } from "@/Components/item-list";

const itemsData = itemList;


export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleSubmit(item){
    setItems([...items, item]);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Item items={items}/>
      <NewItem onSubmit={(item) => handleSubmit(item)}/>
      <HomeButton/>
    </main>  
  );
}
