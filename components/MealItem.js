import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealProperties from "./MealProperties";

function MealItem(props) {
  function navigateToInstructionsScreen() {
    props.navigation.navigate("MealInstructions", { meal: props.meal });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : [])}
        onPress={navigateToInstructionsScreen}
      >
        <View>
          <Image
            source={{ uri: props.meal.imageUrl }}
            style={styles.image}
          ></Image>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.meal.title}</Text>
          </View>
        </View>
        <MealProperties meal={props.meal} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 20,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 8,
    elevation: 4,
    width: 350,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  titleContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
