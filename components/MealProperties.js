import { StyleSheet, View, Text } from "react-native";

function MealProperties(props) {
  return (
    <View style={[styles.propertiesContainer, props.style]}>
      <Text style={styles.propertyText}>{props.meal.duration}</Text>
      <Text style={styles.propertyText}>
        {props.meal.complexity.toUpperCase()}
      </Text>
      <Text style={styles.propertyText}>
        {props.meal.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealProperties;

const styles = StyleSheet.create({
  propertiesContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  propertyText: {
    marginHorizontal: 10,
  },
});
