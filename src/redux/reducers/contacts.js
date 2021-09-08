const initialState = {
  items: [],
  isLoaded: false,
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default contacts;
