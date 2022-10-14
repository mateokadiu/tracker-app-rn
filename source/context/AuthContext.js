import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ADD_ERROR,
  CLEAR_ERROR_MESSAGE,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from "../utils/types";
import { navigate } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case SIGNUP:
      return { token: action.payload, errorMessage: "" };
    case SIGNIN:
      return { token: action.payload, errorMessage: "" };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: "" };
    case SIGNOUT:
      return { token: "", errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: SIGNUP, payload: data.token });
      navigate("MainNav");
    } catch (err) {
      dispatch({
        type: ADD_ERROR,
        payload: "Something went wrong with the sign up!",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: SIGNIN, payload: data.token });
      navigate("MainNav");
    } catch (err) {
      dispatch({
        type: ADD_ERROR,
        payload: "Something went wrong with the sign in!",
      });
    }
  };

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGNIN, token });
    navigate("MainNav");
  } else {
    navigate("LoginNav");
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: SIGNOUT });
  navigate("LoginNav");
};

const actions = {
  signin,
  signup,
  signout,
  clearErrorMessage,
  tryLocalSignin,
};

const initialState = {
  token: null,
  errorMessage: "",
};

export const { Provider: AuthProvider, Context: AuthContext } =
  createDataContext(authReducer, actions, initialState);
