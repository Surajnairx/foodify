import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch("http://localhost:3000/meals");
      if (!res.ok) {
        //error handling code
      }

      const meals = await res.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {console.log(loadedMeals)}
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
        // <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;
