import { StyleSheet, View, Text } from "react-native";
import Border from "./Border";

function Subtitle(props) {
  return (
    <View>
      <Text style={styles.subtitle}>{props.text}</Text>
      <Border></Border>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "#213e42",
    textShadowOffset: { height: -2, width: 2 },
  },
});
