import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Signature() {
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>ინსპექტორი 1</Text>
      <Text style={styles.text_line}>ინსპექტორი 2</Text>
      <Text style={styles.text_line}>წარმომადგენელი</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text_line: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    borderTopWidth: 3,
    borderTopColor: "grey",
  },
});
