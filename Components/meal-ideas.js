"use client";
import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }
    catch(error){
        console.error("Error", error);
    }
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState(null);

    async function LoadMealIdeas() {
        if (ingredient) { 
            const mealsData = await fetchMealIdeas(ingredient);
            setMeals(mealsData || []); 
        }
    }

    useEffect(() => {LoadMealIdeas()}, [ingredient]);

    return (
        <div className="flex flex-col min-h-screen overflow-auto m-2">
            <h2 className="font-bold text-xl">Meal Ideas</h2>
            <div>
                {meals === null ? (
                    <p>Select an ingredient to show meal ideas</p>
                ) : meals.length === 0 ? (
                    <p>No meals found for {ingredient}.</p>
                ) : (
                    <>
                        <p>Here are some meal ideas using {ingredient}:</p>
                        <ul>
                            {meals.map((meal) => (
                                <li key={meal.idMeal} className="border-2 border-sky-300 p-2 m-1 hover:bg-sky-500">
                                    {meal.strMeal}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}