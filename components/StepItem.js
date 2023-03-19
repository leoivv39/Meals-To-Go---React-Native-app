import { StyleSheet, View, Text } from "react-native";

function StepItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

export default StepItem;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#213e42",
    borderRadius: 4,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    elevation: 4,
    padding: 10,
  },
  text: {
    color: "white",
  },
});
