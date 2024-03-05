"use client";
import { itemList } from "./item-list";
import { useState } from "react";




export const Item = ({items}) => {
  
  const [sortBy, setSortBy] = useState("name")
  
  const getSortedItems = () => {
    return [...items].sort((a, b) => {

      const valueA = a[sortBy].toLowerCase(); 
      const valueB = b[sortBy].toLowerCase();
      
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  };

  const getButtonClass = (buttonSortBy) => {
    return `m-1 p-2 ${
      sortBy === buttonSortBy ? "bg-blue-400" : "bg-sky-300"
    } text-black font-bold py-2 px-4 rounded mr-2`;
  };

  const sortedItems = getSortedItems();

  return (
    <div>
      <div>
      <label>Sort by: </label>
      <button
          className={getButtonClass("name")}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={getButtonClass("category")}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {sortedItems.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col border-2 border-sky-300 p-2 m-2"
          >
            <div className="flex justify-center">
              {item.quantity} - {item.name}
            </div>
            <div className="flex justify-center">{item.category}</div>
          </div>
        );
      })}
    </div>
  );
};
