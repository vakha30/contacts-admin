import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import cl from "./addContact.module.css";

function AddContact({ handleAddContact, setOpenModal }) {
  const [contactAddName, setContactAddName] = useState("");
  const [contactAddNumber, setContactAddNumber] = useState("");

  const handlehange = (e) => {
    switch (e.target.name) {
      case "name":
        setContactAddName(e.target.value);
        break;
      case "number":
        setContactAddNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    handleAddContact({
      name: contactAddName,
      number: contactAddNumber,
    });
    setContactAddName("");
    setContactAddNumber("");
    setOpenModal(false);
  };

  return (
    <div className={cl.addContact}>
      <TextField
        id="standard-basic"
        name="name"
        label="Имя"
        value={contactAddName}
        onChange={handlehange}
      />
      <TextField
        id="standard-basic"
        name="number"
        label="Телефон"
        value={contactAddNumber}
        onChange={handlehange}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Сохранить
      </Button>
    </div>
  );
}

export default AddContact;
