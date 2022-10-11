import React from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginNavigator from "./source/navigations/LoginNavigator";
import MainNavigator from "./source/navigations/MainNavigator";
import { AuthProvider } from "./source/context/AuthProvider";
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginNav"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginNav" component={LoginNavigator} />
            <Stack.Screen name="MainNav" component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
