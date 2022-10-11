import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    const provider = {
      state,
      ...boundActions,
    };

    return <Context.Provider children={children} value={provider} />;
  };

  return { Context, Provider };
};
