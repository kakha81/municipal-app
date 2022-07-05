import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  { label: "დავით წიკლაური", value: "1" },
  { label: "კიაზო შარიქაძე", value: "2" },
  { label: "ბაჩანა ოდიკაძე", value: "3" },
  { label: "ბესარიონ გულბიანი", value: "4" },
  { label: "ოთარ ნიკოლეიშვილი", value: "5" },
  { label: "თენგიზ დეკანოსიძე", value: "6" },
  { label: "თეიმურაზ ასანიძე", value: "7" },
  { label: "აბგარი ენუქიძე", value: "8" },
  { label: "კახაბერ მჭედლიშვილი", value: "9" },
  { label: "გიორგი კანაშვილი", value: "10" },
  { label: "გიორგი მჭედლიშვილი", value: "11" },
  { label: "ლევან შუბითიძე", value: "12" },
  { label: "თამაზი ჩიხლაძე", value: "13" },
  { label: "ნატო ზარიძე", value: "14" },
];

export default function DropDownComponent_02() {
  const [value, setValue] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="სახელი და გვარი"
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="red" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 5,
    height: 20,
    color: "red",
    backgroundColor: "white",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 20,
    color: "red",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: "red",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 16,
  },
});
