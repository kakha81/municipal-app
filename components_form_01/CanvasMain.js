import React from "react";
import { StyleSheet, View } from "react-native";
import Canvas_1 from "./Canvas_1";
import Canvas_2 from "./Canvas_2";
import Canvas_3 from "./Canvas_3";
export default function CanvasMain() {
  return (
    <View style={styles.container}>
      <Canvas_1 />
      <Canvas_2 />
      <Canvas_3 />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
