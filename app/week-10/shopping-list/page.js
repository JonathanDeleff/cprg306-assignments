"use client";
import { HomeButton, Week10Back } from "@/Components/buttons";
import { Item } from "@/Components/item";
import { NewItem } from "@/Components/new-item";
import { useState, useEffect } from "react";
import MealIdeas from "@/Components/meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null)

  useEffect(() => {
    if (user && user.uid){
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    
      };

    loadItems();

    }
  }, [user]);

  async function handleSubmit(item){
    try {
      // Add the item to the shopping list using the addItem function
      const newItemId = await addItem(user.uid, item);
  
      // Set the id of the new item
      const newItem = { ...item, id: newItemId };
  
      // Update the state of items to include the new item
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error appropriately (e.g., show error message)
    }
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
        <Week10Back/>       
        <HomeButton/>
      </div>
        <MealIdeas ingredient = {selectedItemName}/>
    </main>  
  );
}
