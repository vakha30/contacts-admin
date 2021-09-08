import axios from "axios";

export const login = (user) => async (dispatch) => {
  try {
    const { username, password } = user;
    const res = await axios.get(
      `http://localhost:3001/users?username=${username}&password=${password}`
    );

    if (res.data[0]) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      dispatch(setUser(res.data[0]));
    } else {
      alert("Пользователь не найден!");
    }
  } catch (e) {}
};

export const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  return {
    type: "LOGOUT",
  };
};

const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
