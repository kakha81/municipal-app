import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "01 იანვარი 2022წ.", value: "1" },
  { label: "01 თებერვალი 2022წ.", value: "2" },
  { label: "01 მარტი 2022წ.", value: "3" },
  { label: "01 აპრილი 2022წ.", value: "4" },
  { label: "01 მაისი 2022წ.", value: "5" },
  { label: "01 ივნისი 2022წ.", value: "6" },
  { label: "01 ივლისი 2022წ.", value: "7" },
  { label: "01 აგვისტო 2022წ.", value: "8" },
  { label: "01 სექტემბერი 2022წ.", value: "9" },
  { label: "01 ოქტომბერი 2022წ.", value: "10" },
  { label: "01 ნოემბერი 2022წ.", value: "11" },
  { label: "01 დეკემბერი 2022წ.", value: "12" },
];

export default function Reg_Date() {
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Item_1}>მოსაკრებლის დარიცხვის თარიღი:</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="აირჩიე თვე"
        placeholderTextColor="black"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown: {
    height: 30,
    width: 350,
    color: "red",
    backgroundColor: "white",
    padding: 12,
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
    fontSize: 20,
    color: "red",
  },
  text_Item_1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
