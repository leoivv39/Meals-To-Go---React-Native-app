import { StyleSheet, View } from "react-native";

function Border(props) {
  return <View style={[styles.border, props.style]}></View>;
}

export default Border;

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 2,
    width: 300,
    marginVertical: 3,
    borderBottomColor: "#213e42",
  },
});
