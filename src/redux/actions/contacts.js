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

export const addNewContact = (contact) => async (dispatch) => {
  const { name, number } = contact;
  try {
    if (name.length < 3 || number.length < 3) {
      throw "Длина должна быть не меньще 3х символов";
    }
    const response = await axios.post("http://localhost:3001/contacts", {
      name,
      number,
    });
    console.log(response.data);
    dispatch(fetchContacts());
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3001/contacts/${id}`);
    console.log(response.data);
    dispatch(fetchContacts());
  } catch (e) {
    alert(e);
  }
};

export const editContact = (contact) => async (dispatch) => {
  const { id, name, number } = contact;
  try {
    if (name.length < 3 || number.length < 3) {
      throw "Длина должна быть не меньще 3х символов";
    }
    const response = await axios.put(`http://localhost:3001/contacts/${id}`, {
      name,
      number,
    });
    console.log(response.data);
    dispatch(fetchContacts());
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
