import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownComponent from "./DropDownComponent";
export default function Employee_2() {
  return (
    <View>
      <View>
        <Text style={styles.text_line_01}>
          რეგისტრაციის აქტზე ხელმომწერის თანამდებობა და სახელი, გვარი:
        </Text>
        <DropDownComponent />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text_line_01: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
