import React, { useContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      clearErrorMessage();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead."
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

export default SigninScreen;
