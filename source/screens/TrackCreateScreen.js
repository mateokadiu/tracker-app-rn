import "../mocks/_mockLocation"; // mock location for real device
import React, { useCallback, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { useIsFocused } from "@react-navigation/native";

import Map from "../components/Map";
import Spacer from "../components/Spacer";
import { LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Spacer>
        <Text style={styles.text} h3>
          Create a Track
        </Text>
      </Spacer>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default TrackCreateScreen;
