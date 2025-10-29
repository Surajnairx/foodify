import useHttp from "../hooks/useHttp";
import Error from "../UI/Error";
import MealItem from "./MealItem";

const requestConfig = {};

function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals.... </p>;
  }
  if (error) {
    {
      console.log(error);
    }
    return <Error title="failed to fetch meals" message={error} />;
    // return <Error  />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
