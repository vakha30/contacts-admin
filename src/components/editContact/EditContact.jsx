import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import cl from "./editContact.module.css";

const EditContact = React.memo(function ({
  saveEditContact,
  setOpenModal,
  name,
  number,
}) {
  const [contactEditName, setContactEditName] = useState(name);
  const [contactEditNumber, setContactEditNumber] = useState(number);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setContactEditName(e.target.value);
        break;
      case "number":
        setContactEditNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    saveEditContact({
      name: contactEditName,
      number: contactEditNumber,
    });
    setContactEditName("");
    setContactEditNumber("");
    setOpenModal(false);
  };

  return (
    <div className={cl.addContact}>
      <TextField
        id="standard-basic"
        name="name"
        label="Имя"
        value={contactEditName}
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        name="number"
        label="Телефон"
        value={contactEditNumber}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Изменить
      </Button>
    </div>
  );
});

export default EditContact;
