import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { FETCH_TRACKS } from "../utils/types";

const trackReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const { data } = await trackerApi.get("/tracks");

  dispatch({ type: FETCH_TRACKS, payload: data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

const actions = {
  fetchTracks,
  createTrack,
};

const initialState = [];

export const { Provider: TrackProvider, Context: TrackContext } =
  createDataContext(trackReducer, actions, initialState);
