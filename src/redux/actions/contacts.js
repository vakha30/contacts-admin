import axios from "axios";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(setLoaded(false));
    const response = await axios("http://localhost:3001/contacts");
    dispatch(setContacts(response.data));
  } catch (e) {
    alert(e);
  }
};

const setContacts = (data) => {
  return {
    type: "SET_CONTACTS",
    payload: data,
  };
};

const setLoaded = (value) => {
  return {
    type: "SET_LOADED",
    payload: value,
  };
};
