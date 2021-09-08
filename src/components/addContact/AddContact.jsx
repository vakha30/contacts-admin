import React from "react";
import { Button, TextField } from "@material-ui/core";

import cl from "./addContact.module.css";

function AddContact() {
  return (
    <div className={cl.addContact}>
      <TextField id="standard-basic" label="Имя" />
      <TextField id="standard-basic" label="Телефон" />
      <Button variant="contained" color="primary">
        Сохранить
      </Button>
    </div>
  );
}

export default AddContact;
