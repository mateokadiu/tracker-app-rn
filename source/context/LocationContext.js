import {
  ADD_CURRENT_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CHANGE_NAME,
} from "../utils/types";
import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  dispatch({ action: CHANGE_NAME, payload: name });
  console.log(name);
};

const startRecording = (dispatch) => () => {
  dispatch({ type: START_RECORDING });
};

const stopRecording = (dispatch) => () => {
  dispatch({ type: STOP_RECORDING });
};

const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION, payload: location });
  }
};

const actions = {
  startRecording,
  stopRecording,
  addLocation,
  changeName,
};

const initialState = {
  recording: false,
  currentLocation: null,
  locations: [],
  name: "",
};

const { Context, Provider } = createDataContext(
  locationReducer,
  actions,
  initialState
);

export { Context as LocationContext, Provider as LocationProvider };
