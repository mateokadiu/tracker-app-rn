import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ADD_ERROR, CLEAR_ERROR_MESSAGE, SIGNIN, SIGNUP } from "../utils/types";
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

const signout = (dispatch) => async () => {};

const actions = {
  signin,
  signup,
  signout,
  clearErrorMessage,
};

const initialState = {
  token: null,
  errorMessage: "",
};

const { Provider, Context } = createDataContext(
  authReducer,
  actions,
  initialState
);

export { Provider as AuthProvider, Context as AuthContext };
