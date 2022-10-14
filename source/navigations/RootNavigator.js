import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSwitchNavigator } from "react-navigation-switch";
import { setNavigator } from "../utils/navigationRef";
import ResolveAuthScreen from "../screens/ResolveAuthScreen";
import LoginNavigator from "./LoginNavigator";
import MainNavigator from "./MainNavigator";

const Switch = createSwitchNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <Switch.Navigator
        initialRouteName="ResolveAuth"
        screenOptions={{ headerShown: false }}
      >
        <Switch.Screen name="ResolveAuth" component={ResolveAuthScreen} />
        <Switch.Screen name="LoginNav" component={LoginNavigator} />
        <Switch.Screen name="MainNav" component={MainNavigator} />
      </Switch.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default RootNavigator;
