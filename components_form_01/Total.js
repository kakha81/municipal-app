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
          setTotalCount(N_1 + N_2 + N_3);
        }}
        title="თვის ტარიფი"
      />
      <Text style={styles.text_line_2}>{totalCount}</Text>
      {/* <TextInput
        style={styles.text_line_2}
        style={styles.textInput_line}
        keyboardType="numeric"
        maxLength={5}
        value={Number_1}
        onChangeText={setNumber_1}
      /> */}
      <Text style={styles.text_line_3}>ლარი.</Text>
      {/* <Button
        onPress={() => {
          captureScreen({
            format: "jpg",
            quality: 0.8,
          }).then(
            //callback function to get the result URL of the screnshot
            (uri) => {
              setSavedImagePath(uri);
              setImageURI(uri);
            }
          );
        }}
        title="SCREENSHOT"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container_line: {
    flexDirection: "row",
    alignItems: "center",
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
