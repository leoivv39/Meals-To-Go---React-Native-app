import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen(props) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("MealsOverview", {
        category: itemData.item,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
