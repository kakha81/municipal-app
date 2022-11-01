import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Reg_Number_1() {
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>აქტის №: რ</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  text_line: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
