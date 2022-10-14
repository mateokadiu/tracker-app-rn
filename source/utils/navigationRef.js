let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params = {}) => {
  navigator.navigate(routeName, params);
};
