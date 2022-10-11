import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

import Spacer from "./Spacer";
import { navigate } from "../utils/navigationRef";

const NavLink = ({ text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  link: {
    color: "blue",
    alignSelf: "center",
  },
});

export default NavLink;
