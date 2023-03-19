import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton(props) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : [])}
      onPress={props.onPress}
    >
      <Ionicons
        name={props.name}
        color={props.color}
        size={props.size}
      ></Ionicons>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
