import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Now() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let today = new Date();
    let date =
      today.getDate() +
      ".0" +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear() +
      "წელი.";
    setDate(date);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text_Item_1}>აქტის შედგენის თარიღი:</Text>
      <Text style={styles.text_Item_1}>{date}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "blue",
  },
  textItem: {
    flex: 1,
    fontSize: 25,
    color: "red",
  },
  text_Item_1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginRight: 15,
  },
  placeholderStyle: {
    fontSize: 25,
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
