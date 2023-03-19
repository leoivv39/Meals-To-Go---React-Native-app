import { Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList";

function FavoritesScreen(props) {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  return favoriteMeals.length > 0 ? (
    <MealsList items={favoriteMeals} navigation={props.navigation} />
  ) : (
    <View style={styles.textContainer}>
      <Text style={styles.text}>No favorite meals selected !</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
