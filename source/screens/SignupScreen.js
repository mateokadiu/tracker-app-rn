import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "@rneui/themed";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.header}>
          Sign Up for Tracker
        </Text>
      </Spacer>

      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>

      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default SignupScreen;
