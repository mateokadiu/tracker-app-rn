import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Spacer from "../components/Spacer";
import { AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useIsFocused } from "@react-navigation/native";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      clearErrorMessage();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
