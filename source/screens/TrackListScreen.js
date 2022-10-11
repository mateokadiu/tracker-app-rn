import React from "react";
import { Text, StyleSheet, Button, SafeAreaView } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
