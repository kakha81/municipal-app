import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CheckBox from "expo-checkbox";
export default function Tel_Number_2() {
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container_line}>
      <Text style={styles.text_line}>ბუღალტრის ტელ №:</Text>
      <TextInput
        style={styles.textInput_line}
        keyboardType="numeric"
        maxLength={9}
      />
      <Text style={styles.label}>სმს</Text>
      <CheckBox
        style={styles.check_box}
        value={agree}
        onValueChange={() => setAgree(!agree)}
        color={agree ? "red" : undefined}
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
    width: 200,
    padding: 5,
    marginLeft: 78,
  },
  label: {
    marginLeft: 20,
    fontSize: 20,
  },
  check_box: {
    marginLeft: 20,
    marginTop: 5,
  },
});
