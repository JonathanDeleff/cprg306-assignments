"use client";
import { HomeButton } from "@/Components/buttons";
import { Item } from "@/Components/item";
import { NewItem } from "@/Components/new-item";
import { useState } from "react";
import { itemList } from "@/Components/item-list";
import MealIdeas from "@/Components/meal-ideas";

const itemsData = itemList;


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null)

  function handleSubmit(item){
    setItems([...items, item]);
  }

  function handleItemSelect(item){
    let cleanItem = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanItem = cleanItem.split(',')[0].trim();

    setSelectedItemName(cleanItem);
  }


  return (
    <main className="flex min-h-screen flex-row items-start justify-center">
      <div className="flex flex-col items-center min-h-screen m-2">
        <NewItem onSubmit={(item) => handleSubmit(item)}/>
        <Item items={items} onItemSelect={handleItemSelect}/>        
        <HomeButton/>
      </div>
        <MealIdeas ingredient = {selectedItemName}/>
    </main>  
  );
}
