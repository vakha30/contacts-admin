const initialState = {
  currentUser: {},
  isAuth: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export default auth;
