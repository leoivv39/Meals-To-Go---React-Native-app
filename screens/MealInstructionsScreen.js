import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealProperties from "../components/MealProperties";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

function MealInstructionScreen(props) {
  const favoriteMealsContext = useContext(FavoritesContext);
  const { meal } = props.route.params;

  const mealIsFavorite = favoriteMealsContext.ids.includes(meal.id);

  function changeFavoriteStatusHandler() {
    if (!mealIsFavorite) {
      favoriteMealsContext.addFavoriteMeal(meal.id);
    } else {
      favoriteMealsContext.removeFavoriteMeal(meal.id);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={mealIsFavorite ? "star" : "star-outline"}
            title="Press me!"
            size={24}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image}></Image>
        <Text style={styles.title}>{meal.title}</Text>
        <MealProperties meal={meal} style={styles.properties} />
        <Subtitle text="Ingredients"></Subtitle>
        <List items={meal.ingredients}></List>
        <Subtitle text="Steps"></Subtitle>
        <List items={meal.steps}></List>
      </View>
    </ScrollView>
  );
}

export default MealInstructionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  properties: {
    backgroundColor: "white",
    elevation: 4,
    marginTop: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#213e42",
  },
});
