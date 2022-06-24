import * as React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const image = require("../mosakrebeli_reg/assets/logo_municipaluri.png");

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
      <Image source={image} style={styles.image} />
      <Button
        style={styles.button_1}
        title="რეგისტრაცია"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        style={styles.button_1}
        title="ცვლილება"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="მთავარი გვერდი" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
  image: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
});
