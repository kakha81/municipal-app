import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
const data = [
  {
    label: "1. მუზეუმები, ბიბლიოთეკები, გალერეები, არქივები.",
    value: "1",
    rate: 0.03,
    param: "1 მ2.",
  },
  {
    label: "2. ოფისები, სააგენტოები, პროფესიული და სახელმწიფო ორგანიზაციები.",
    value: "2",
    rate: 0.1,
    param: "1 მ2.",
  },
  {
    label: "3. ბანკები, საკრედიტო და საფინანსო ორგანიზაციები.",
    value: "3",
    rate: 0.25,
    param: "1 მ2.",
  },
  {
    label: "4. კინოთეატრები და თეატრები, საკონცერტო დარბაზები.",
    value: "4",
    rate: 0.22,
    param: "1 სავარძელი.",
  },
  {
    label: "5. მოხუცებულთა და ბავშვთა სახლები, უმწეოთათვის უფასო სასადილოები.",
    value: "5",
    rate: 0.09,
    param: "1 ადგილი.",
  },
  {
    label:
      "6.სკოლები, ინსტიტუტები, კოლეჯები, საბავშვო ბაგა-ბაღები, საგანმანათლებლო დაწესებულებები.",
    value: "6",
    rate: 0.13,
    param: "1 მოსწავლე.",
  },
  {
    label: "7. სასტუმროები და სასტუმროს ტიპის საერთო საცხოვრებლები.",
    value: "7",
    rate: 1.15,
    param: "1 საწოლი.",
  },
  {
    label: "8. საავადმყოფოები და სამშობიარო სახლები.",
    value: "8",
    rate: 0.77,
    param: "1 საწოლი.",
  },
  {
    label:
      "9. პოლიკლინიკები, სამედიცინო-დიაგნოსტიკური ცენტრები, ექიმების, სტომატოლოგიური და სამედიცინო კაბინეტები.",
    value: "9",
    rate: 0.11,
    param: "1 მ2.",
  },
  {
    label:
      "10.1. (ღია) სტადიონები, სპორტულ-გამაჯანსაღებელი დაწესებულებები და მანეჟები, კორტები, საცურაო აუზები.",
    value: "101",
    rate: 0.01,
    param: "1 მ2.",
  },
  {
    label:
      "10.2. (დახურული) სტადიონები, სპორტულ-გამაჯანსაღებელი დაწესებულებები და მანეჟები, კორტები, საცურაო აუზები.",
    value: "102",
    rate: 0.05,
    param: "1 მ2.",
  },
  {
    label: "11. სასურსათო საქონლის მაღაზიები.",
    value: "11",
    rate: 0.51,
    param: "1 მ2.",
  },
  {
    label:
      "12. სამრეწველო საქონლის მაღაზიები, აფთიაქები, საიუველირო, ანტიკვარიატის მაღაზიები, ზოომაღაზიები, ვეტერინარული ცენტრები.",
    value: "12",
    rate: 0.25,
    param: "1 მ2.",
  },
  {
    label: "13. აგრარული ბაზრები, ყვავილების დახურული მაღაზიები.",
    value: "13",
    rate: 0.2,
    param: "1 მ2.",
  },
  {
    label:
      "14. შერეული საქონლის ბაზრობები, საბითუმო ვაჭრობის საწყობები და მაცივრები.",
    value: "14",
    rate: 0.14,
    param: "1 მ2.",
  },
  {
    label: "15.1. (ღია) ავტოსადგომები და საწყობები პირდაპირი მიყიდვის გარეშე.",
    value: "151",
    rate: 0.01,
    param: "1 მ2.",
  },
  {
    label:
      "15.2. (დახურული) ავტოსადგომები და საწყობები პირდაპირი მიყიდვის გარეშე.",
    value: "152",
    rate: 0.05,
    param: "1 მ2.",
  },
  {
    label: "16. ავტოგასამართი სადგურები.",
    value: "16",
    rate: 0.25,
    param: "1 მ2.",
  },
  {
    label:
      "17.1. (ღია) სატრანსპორტო საშუალებების საჩვენებელი და გასაყიდი ნაგებობები, სათბურები და ფერმები.",
    value: "171",
    rate: 0.03,
    param: "1 მ2.",
  },
  {
    label:
      "17.2. (დახურული) სატრანსპორტო საშუალებების საჩვენებელი და გასაყიდი ნაგებობები, სათბურები და ფერმები.",
    value: "172",
    rate: 0.05,
    param: "1 მ2.",
  },
  {
    label:
      "18.1. (ღია) სატრანსპორტო საშუალებების სარემონტო და სამრეცხაო სადგურები, ტექ.მომსახურების ადგილები, შავი და ფერადი ლითონების მიმღები პუნქტები.",
    value: "181",
    rate: 0.02,
    param: "1 მ2.",
  },
  {
    label:
      "18.2. (ღია) სატრანსპორტო საშუალებების სარემონტო და სამრეცხაო სადგურები, ტექ.მომსახურების ადგილები, შავი და ფერადი ლითონების მიმღები პუნქტები.",
    value: "182",
    rate: 0.17,
    param: "1 მ2.",
  },
  {
    label: "19. აბანოები, საუნები.",
    value: "19",
    rate: 0.12,
    param: "1 მ2.",
  },
  {
    label:
      "20. სადალაქოები, სილამაზის სალონები, კოსმეტოლოგიის და ესთეტიკის ცენტრები.",
    value: "20",
    rate: 0.23,
    param: "1 მ2.",
  },
  {
    label:
      "21. სამეწარმეო საქმიანობა შენობის შიგნით მიმდინარე წარმოებისას, საყოფაცხოვრებო მომსახურების ობიექტები.",
    value: "21",
    rate: 0.17,
    param: "1 მ2.",
  },
  {
    label: "22. რესტორნები, პიცერიები, სასადილოები, კაფეები და ბარები.",
    value: "22",
    rate: 1.6,
    param: "1 დასაჯდომი ადგილი.",
  },
  {
    label: "23. სარიტუალო დარბაზები.",
    value: "23",
    rate: 0.53,
    param: "1 დასაჯდომი ადგილი.",
  },
  {
    label: "24. საცხობები, საოჯახო სამზარეულოები (დასაჯდომი ადგილების გარეშე).",
    value: "24",
    rate: 0.17,
    param: "1 მ2.",
  },
  {
    label:
      "25. დისკოთეკები, ღამის კლუბები, კაზინოები, ტოტალიზატორები, სათამაშო და გასართობი ცენტრები.",
    value: "25",
    rate: 0.24,
    param: "1 მ2.",
  },
  {
    label:
      "26.1. (ღია) საქალაქთაშორისო და საერთაშორისო ავტოსადგურები, რკინიგზის სადგურები.",
    value: "261",
    rate: 0.005,
    param: "1 მ2.",
  },
  {
    label:
      "26.2. (დახურული) საქალაქთაშორისო და საერთაშორისო ავტოსადგურები, რკინიგზის სადგურები.",
    value: "262",
    rate: 0.05,
    param: "1 მ2.",
  },
  {
    label:
      "27. ღია ტიპის დასვენებისა და გასართობი თავშეყრის ადგილები, სკვერები, ბაღები, ატრაქციონები.",
    value: "27",
    rate: 0.005,
    param: "1 მ2.",
  },
  {
    label:
      "28. სამხედრო ნაწილები და პენიტენციური სისტემები (ინფრასტრუქტურის ფართზე მოსაკრებელი არ დაერიცხება).",
    value: "28",
    rate: 0.4,
    param: "1 სამხედრო ან პატიმარი.",
  },
  {
    label:
      "29. საწარმოო ობიექტების ღია ტერიტორიები, სადაც მიმდინარეობს საწარმოო პროცესი.",
    value: "29",
    rate: 0.005,
    param: "1 მ2.",
  },
  {
    label:
      "30. მსხვილი სერიული პროდუქციის საწარმოების შენობა-ნაგებობები (საწარმოო ნარჩენების გარდა).",
    value: "30",
    rate: 0.03,
    param: "1 მ2.",
  },
];

// export const N_3 = 30;

export default function Profile_3() {
  const [value, setValue] = useState(null);
  const [Rate_3, setRate_3] = useState(null);
  const [Param, setParam] = useState(null);
  const [Number_3, setNumber_3] = useState(null);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="პროფილი"
        value={value}
        renderItem={renderItem}
        onChange={(item) => {
          setValue(item.value);
          setRate_3(item.rate);
          setParam(item.param);
        }}
      />
      <View style={styles.container_line_01}>
        <View style={styles.container_line_02}>
          <Text style={styles.text_line}>რაოდენობა:</Text>
          <TextInput
            style={styles.textInput_line}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={setNumber_3}
          />
        </View>
        <View style={styles.container_line_02}>
          <Text style={styles.text_line}>განაკვეთი:</Text>
          <Text style={styles.text_line_1}>{Rate_3}</Text>
          <Text style={styles.text_line}>ლარი</Text>
          <Text style={styles.text_line}>{Param}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    margin: 0,
    height: 80,
    color: "red",
    backgroundColor: "white",
    padding: 12,
    borderWidth: 3,
    borderColor: "grey",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
    backgroundColor: "white",
  },
  placeholderStyle: {
    fontSize: 20,
    color: "grey",
  },
  selectedTextStyle: {
    height: 65,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  container_line_01: {
    flexDirection: "row",
    alignItems: "center",
  },
  container_line_02: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_line: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 0,
    marginLeft: 10,
    textAlign: "left",
  },
  text_line_1: {
    height: 30,
    width: 100,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "grey",
  },
  textInput_line: {
    textAlign: "center",
    borderColor: "grey",
    borderWidth: 3,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    height: 30,
    width: 100,
    padding: 5,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
