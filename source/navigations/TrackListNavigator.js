import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import TrackListScreen from "../screens/TrackListScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";

const Stack = createStackNavigator();

const TrackListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TrackList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

export default TrackListNavigator;
