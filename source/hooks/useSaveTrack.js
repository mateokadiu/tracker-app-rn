import { useContext } from "react";
import { TrackContext } from "../context/TrackContext";
import { LocationContext } from "../context/LocationContext";
import { navigate } from "../utils/navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
