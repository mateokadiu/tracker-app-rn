import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import AccountScreen from "../screens/AccountScreen";
import TrackListNavigator from "./TrackListNavigator";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="TrackNav">
      <Tab.Screen
        options={{ headerShown: false, title: "Tracks" }}
        name="TrackNav"
        component={TrackListNavigator}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ headerShown: false, title: "Create" }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainNavigator;
