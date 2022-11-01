import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
export default function Private_Number() {
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>პირადი ნომერი:</Text>
      <TextInput
        style={styles.textInput_line}
        keyboardType="numeric"
        maxLength={11}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
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
    height: 35,
    width: 470,
    padding: 5,
    marginLeft: 121,
  },
});
