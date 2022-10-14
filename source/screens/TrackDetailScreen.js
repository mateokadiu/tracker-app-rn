import React, { useContext } from "react";
import { SafeAreaView } from "react-native";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(TrackContext);

  const { _id } = route.params;

  const { name, locations } = state.find((t) => t._id === _id);
  const initialCoords = locations[0].coords;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
