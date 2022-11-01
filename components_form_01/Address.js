import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Address() {
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>ობიექტის მისამართი:</Text>
      <TextInput style={styles.textInput_line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  text_line: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  textInput_line: {
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    height: 32,
    width: 470,
    padding: 5,
    marginLeft: 62,
  },
});
