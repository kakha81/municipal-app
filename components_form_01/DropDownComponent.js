import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
const data = [
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - ბესარიონ გულბიანი",
    value: "1",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - თამაზი ჩიხლაძე",
    value: "2",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - ოთარ ნიკოლეიშვილი",
    value: "3",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - აბგარი ენუქიძე",
    value: "4",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - თეიმურაზ ასანიძე",
    value: "5",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - თენგიზ დეკანოსიძე",
    value: "6",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - ბაჩანა ოდიკაძე",
    value: "7",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - გიორგი მჭედლიშვილი",
    value: "8",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - ლევან შუბითიძე",
    value: "9",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - ნატო ზარიძე",
    value: "10",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - გრიგოლ მჭედლიშვილი",
    value: "11",
  },
  {
    label: "მესამე კატეგორიის უფროსი სპეციალისტი - ზურაბ პოპიაშვილი",
    value: "12",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - გიორგი კანაშვილი",
    value: "13",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - კახაბერ მჭედლიშვილი",
    value: "14",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - ირინე მელიქიძე",
    value: "15",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - მედეია შენგელია",
    value: "16",
  },
  {
    label: "პირველი კატეგორიის უმცროსი სპეციალისტი - ნინო ხეთაგაშვილი",
    value: "17",
  },
];
export default function DropDownComponent() {
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
      maxHeight={900}
      labelField="label"
      valueField="value"
      placeholder="მუნიციპალური ინსპექციის თანამშრომელი"
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
    fontSize: 18,
    color: "red",
  },
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
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
