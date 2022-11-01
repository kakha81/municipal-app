import React, { useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
const Canvas_2 = () => {
  const ref = useRef({});
  const imgWidth = 260;
  const imgHeight = 100;
  const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;
  return (
    <View
      style={{
        width: imgWidth,
        height: imgHeight,
        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 3,
      }}
    >
      <SignatureScreen
        ref={ref}
        bgWidth={imgWidth}
        bgHeight={imgHeight}
        penColor="blue"
        maxWidth={1}
        dotSize={1}
      />
      <Text style={styles.button} onPress={() => ref.current.clearSignature()}>
        x
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 20,
    height: 37,
    color: "red",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
export default Canvas_2;
