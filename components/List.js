import { StyleSheet, View } from "react-native";
import StepItem from "./StepItem";

function List(props) {
  return (
    <View style={styles.content}>
      {props.items.map((item) => {
        return <StepItem key={item} text={item}></StepItem>;
      })}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    padding: 10,
  },
});
