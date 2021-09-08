import React, { useCallback, useState } from "react";
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
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
  }, [dispatch, history, isAuth]);

  const openAddModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header
          isAuth={isAuth}
          currentUser={currentUser}
          openAddModal={openAddModal}
          setSearchValue={setSearchValue}
        />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contacts">
          <Contacts
            openModal={openModal}
            setOpenModal={setOpenModal}
            searchValue={searchValue}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
