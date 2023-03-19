import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        renderItem={(itemData) => (
          <MealItem meal={itemData.item} navigation={props.navigation} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
});
