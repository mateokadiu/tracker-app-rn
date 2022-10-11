import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {};

const { Provider, Context } = createDataContext(authReducer, actions, {
  isSignedIn: false,
});

export { Provider as AuthProvider, Context as AuthContext };
