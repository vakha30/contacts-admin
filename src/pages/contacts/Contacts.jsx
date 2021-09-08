import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addNewContact, fetchContacts } from "../../redux/actions/contacts";

import Contact from "../../components/contact/Contact";

import cl from "./contacts.module.css";
import { Button, CircularProgress } from "@material-ui/core";

import MyModal from "../../components/ui/myModal/MyModal";
import AddContact from "../../components/addContact/AddContact";

function Contacts({ openModal, setOpenModal }) {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ contacts }) => contacts);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleAddContact = (newContact) => {
    dispatch(addNewContact(newContact));
  };

  return (
    <div className={cl.contactsPage}>
      <div className={cl.contacts}>
        {isLoaded ? (
          items.map((item, index) => (
            <Contact key={`${item.id}_${index}`} {...item} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      <MyModal isOpen={openModal} setOpen={setOpenModal}>
        <AddContact
          handleAddContact={handleAddContact}
          setOpenModal={setOpenModal}
        />
      </MyModal>
    </div>
  );
}

export default Contacts;
