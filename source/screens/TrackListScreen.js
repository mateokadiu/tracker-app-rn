import { useFocusEffect } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, StyleSheet, Button, SafeAreaView, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";
import { TrackContext } from "../context/TrackContext";
import { TouchableOpacity } from "react-native";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemChevron } from "@rneui/base/dist/ListItem/ListItem.Chevron";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(() => {
    fetchTracks();
  });

  return (
    <SafeAreaView>
      <FlatList
        style={{ flexDirection: "column" }}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem>
                <ListItemTitle>{item.name}</ListItemTitle>
                <ListItemChevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
