import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "@rneui/themed";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.header}>
          {headerText}
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

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: "red",
    alignSelf: "center",
    marginBottom: 16,
  },
});

export default AuthForm;
