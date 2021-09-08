import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Contacts from "./pages/contacts/Contacts";
import { login } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth, currentUser } = useSelector(({ auth }) => auth);

  React.useEffect(() => {
    if (localStorage.getItem("username")) {
      dispatch(
        login({
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        })
      );
    }

    if (isAuth) {
      history.push("/contacts");
    } else {
      history.push("/login");
    }
  }, [isAuth]);

  return (
    <div className="App">
      <div className="container">
        <Header isAuth={isAuth} currentUser={currentUser} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </div>
    </div>
  );
}

export default App;
