import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import Map from "../components/Map";
import Spacer from "../components/Spacer";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Spacer>
        <Text style={styles.text} h3>
          Create a Track
        </Text>
      </Spacer>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default TrackCreateScreen;
