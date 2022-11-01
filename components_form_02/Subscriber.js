import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
export default function Subscriber() {
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>აბონენტის №:</Text>
      <TextInput
        style={styles.textInput_line}
        keyboardType="numeric"
        maxLength={6}
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
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    height: 35,
    width: 110,
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 149,
  },
});
