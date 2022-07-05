import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownComponent_01 from "./DropDownComponent_01";
import DropDownComponent_02 from "./DropDownComponent_02";

export default function Employee_2() {
  return (
    <View>
      <View style={styles.container_line_01}>
        <Text style={styles.text_line_01}>
          რეგისტრაციის აქტზე ხელმომწერის თანამდებობა:
        </Text>
        <DropDownComponent_01 />
      </View>
      <View style={styles.container_line_01}>
        <Text style={styles.text_line_01}>
          აქტზე ხელმომწერის სახელი და გვარი:
        </Text>
        <DropDownComponent_02 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_line_01: {},
  text_line_01: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 0,
  },
});
