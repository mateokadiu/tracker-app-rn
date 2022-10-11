import { CommonActions } from "@react-navigation/native";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params = {}) => {
  navigator.navigate(routeName, params);
};
