import React from "react";
import { StyleSheet, View } from "react-native";

import { TrackProvider } from "./source/context/TrackContext";
import { AuthProvider } from "./source/context/AuthContext";
import { LocationProvider } from "./source/context/LocationContext";

import RootNavigator from "./source/navigations/RootNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <RootNavigator />
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
