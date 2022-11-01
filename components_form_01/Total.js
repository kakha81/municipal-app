import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { N_1 } from "./Profile_1";
import { N_2 } from "./Profile_2";
import { N_3 } from "./Profile_3";
export default function Total() {
  const [totalCount, setTotalCount] = useState(null);
  return (
    <View style={styles.container_line}>
      <Button
        onPress={() => {
          setTotalCount((((N_1 + N_2 + N_3) * 10) / 10).toFixed(2));
        }}
        title="თვის ტარიფი"
      />
      <Text style={styles.text_line_2}>{totalCount}</Text>
      <Text style={styles.text_line_3}>ლარი.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text_line_1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    borderWidth: 3,
    borderColor: "grey",
    color: "white",
    backgroundColor: "grey",
    paddingLeft: 10,
  },
  text_line_2: {
    borderColor: "grey",
    borderWidth: 3,
    fontSize: 20,
    textAlign: "center",

    fontWeight: "bold",
    color: "black",
    height: 30,
    width: 100,
    marginLeft: 25,
  },
  text_line_3: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 15,
    marginRight: 15,
  },
});
