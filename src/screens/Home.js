import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const Home = ({ navigation }) => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Detail", { count: count })}
      >
        <Text>Go to Detail Page</Text>
      </TouchableHighlight>
      <Text>Home Screen</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setCount((prevVal) => prevVal - 1)}
        >
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={{ fontSize: 20, padding: 10 }}>{count}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setCount((prevVal) => prevVal + 1)}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#aaa",
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
});
