import React from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed/dist";
import Spacer from "./Spacer";
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";
const TrackForm = () => {
  const {
    state: { name, recording },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
