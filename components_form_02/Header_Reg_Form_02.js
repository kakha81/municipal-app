import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header_Reg_Form_02() {
  return (
    <View style={styles.container}>
      <View style={styles.container_01}>
        <Image
          style={styles.logo_rustavi}
          source={require("../assets/logo_municipaluri.png")}
        />
        <View style={styles.header_container}>
          <Text style={styles.header_text}>მუნიციპალური ინსპექცია</Text>
          <Text style={styles.header_text_1}>
            ი/პ-ის დასუფთავების მოსაკრებლის ცვლილების ფორმა
          </Text>
        </View>
      </View>
      <View style={styles.divider_container}>
        <Text style={styles.divider_line}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  container_01: {
    marginTop: 0,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo_rustavi: {
    height: 60,
    width: 60,
  },
  header_container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
  },
  header_text_1: {
    fontSize: 20,
    marginTop: 0,
  },
  divider_container: {
    backgroundColor: "red",
  },
  divider_line: {
    height: 5,
  },
});
