import { View, Text } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

function CategoryGridTile(props) {
  return (
    <View style={[styles.categoryContainer, { backgroundColor: props.color }]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : [styles.innerContainer]
        }
        android_ripple={{ color: "#ccc" }}
        onPress={props.onPress}
      >
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    margin: 20,
    height: 150,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
