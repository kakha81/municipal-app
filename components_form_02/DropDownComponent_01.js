import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  { label: "მეორადი სტრუქტურული ერთეულის ხელმძღვანელი", value: "1" },
  { label: "მესამე კატეგორიის უფროსი სპეციალისტი", value: "2" },
  { label: "პირველი კატეგორიის უმცროსი სპეციალისტი", value: "3" },
];

export default function DropDownComponent_01() {
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
      placeholder="თანამდებობა"
      placeholderTextColor="red"
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
    color: "blue",
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
