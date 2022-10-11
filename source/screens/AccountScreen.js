import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
