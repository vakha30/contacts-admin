import React from "react";
import { useDispatch } from "react-redux";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@material-ui/core";

import { login } from "../../redux/actions/auth";

import cl from "./auth.module.css";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <div className={cl.login}>
      <h1>Авторизация</h1>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={username}
          onChange={handleChange}
          label="Username"
          name="username"
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined2"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          name="password"
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        style={{ alignSelf: "flex-end", minWidth: "170px", minHeight: "40px" }}
        onClick={handleClick}
      >
        Войти
      </Button>
    </div>
  );
}

export default Login;
