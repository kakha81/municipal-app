import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header_Reg_Form_01 from "./components_form_01/Header_Reg_Form_01";
import Header_Reg_Form_02 from "./components_form_02/Header_Reg_Form_02";
import Reg_Number_01 from "./components_form_01/Reg_Number_01";
import Reg_Number_02 from "./components_form_02/Reg_Number_02";
import Employee_1 from "./components_form_01/Employee_1";
import Employee_2 from "./components_form_01/Employee_2";
import Subscriber from "./components_form_02/Subscriber";
import Representative from "./components_form_01/Representative";
import Private_Number from "./components_form_01/Private_Number";
import Legal_Entity from "./components_form_01/Legal_Entity";
import Identification_Number from "./components_form_01/Identification_Number";
import Address from "./components_form_01/Address";
import Owner from "./components_form_01/Owner";
import ProfileName from "./components_form_01/ProfileName";
import Tel_Number_1 from "./components_form_01/Tel_Number_1";
import Tel_Number_2 from "./components_form_01/Tel_Number_2";
import Tel_Number_3 from "./components_form_01/Tel_Number_3";
import Tel_Number_4 from "./components_form_01/Tel_Number_4";
import Profile_1 from "./components_form_01/Profile_1";
import Profile_2 from "./components_form_01/Profile_2";
import Profile_3 from "./components_form_01/Profile_3";
import Total from "./components_form_01/Total";
import CanvasMain from "./components_form_01/CanvasMain";
import Signature from "./components_form_01/Signature";
import Reg_Date from "./components_form_01/Reg_Date";
import Now from "./components_form_01/Now";
const image = require("../municipal-app/assets/logo_municipaluri.png");
function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
      }}
    >
      <Text style={styles.text_header}>მუნიციპალური ინსპექცია</Text>
      <Text style={styles.text_header_1}>დასუფთავების მოსaკრებელი</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.button_1} onPress={() => navigation.navigate(" ")}>
        რეგისტრაცია
      </Text>
      <Text style={styles.button_2} onPress={() => navigation.navigate("  ")}>
        ცვლილება
      </Text>
    </View>
  );
}
function Registration() {
  return (
    <KeyboardAvoidingView enableOnAndroid behavior='padding'>
      <ScrollView>
        <View style={styles.container}>
          <Header_Reg_Form_01 />
          <Reg_Number_01 />
          <Employee_1 />
          <Employee_2 />
          <Representative />
          <Private_Number />
          <Legal_Entity />
          <Identification_Number />
          <Address />
          <Owner />
          <ProfileName />
          <Tel_Number_1 />
          <Tel_Number_2 />
          <Tel_Number_3 />
          <Tel_Number_4 />
          <Profile_1 />
          <Profile_2 />
          <Profile_3 />
          <Total />
          <CanvasMain />
          <Signature />
          <Reg_Date />
          <Now />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
function Changing() {
  return (
    <KeyboardAvoidingView enableOnAndroid behavior='padding'>
      <ScrollView>
        <View style={styles.container}>
          <Header_Reg_Form_02 />
          <Reg_Number_02 />
          <Employee_1 />
          <Employee_2 />
          <Subscriber />
          <Representative />
          <Private_Number />
          <Legal_Entity />
          <Identification_Number />
          <Address />
          <Owner />
          <ProfileName />
          <Tel_Number_1 />
          <Tel_Number_2 />
          <Tel_Number_3 />
          <Tel_Number_4 />
          <Profile_1 />
          <Profile_2 />
          <Profile_3 />
          <Total />
          <CanvasMain />
          <Signature />
          <Reg_Date />
          <Now />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='მთავარი გვერდი' component={HomeScreen} />
        <Stack.Screen name=' ' component={Registration} />
        <Stack.Screen name='  ' component={Changing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  text_header: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 100,
  },
  text_header_1: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
  button_1: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: "dodgerblue",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "dodgerblue",
    textAlign: "center",
    paddingTop: 5,
  },
  button_2: {
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: "dodgerblue",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: "dodgerblue",
    textAlign: "center",
    paddingTop: 5,
  },
  container: {
    backgroundColor: "white",
  },
});
