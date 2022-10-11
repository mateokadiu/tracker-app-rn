import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
};

export default ResolveAuthScreen;
