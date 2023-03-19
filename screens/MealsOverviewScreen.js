import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

function MealsOverviewScreen(props) {
  const { category } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(category.id) >= 0
  );
  return (
    <MealsList items={displayedMeals} navigation={props.navigation}></MealsList>
  );
}

export default MealsOverviewScreen;
