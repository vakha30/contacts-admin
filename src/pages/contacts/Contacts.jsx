import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addNewContact,
  fetchContacts,
  deleteContact,
  editContact,
} from "../../redux/actions/contacts";

import Contact from "../../components/contact/Contact";

import cl from "./contacts.module.css";
import { CircularProgress } from "@material-ui/core";

import MyModal from "../../components/ui/myModal/MyModal";
import AddContact from "../../components/addContact/AddContact";
import EditContact from "../../components/editContact/EditContact";

function Contacts({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editContactData, setEditContact] = useState({});

  const { items, isLoaded } = useSelector(({ contacts }) => contacts);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addNewContact(newContact));
  };

  const handleDeleteContact = (id) => {
    if (window.confirm("Вы уверены?")) {
      dispatch(deleteContact(id));
    }
  };

  const handleEditContact = useCallback((contact) => {
    setEditContact(contact);
    setOpenEditModal(true);
  }, []);

  const saveEditContact = ({ name, number }) => {
    const updateContact = {
      id: editContactData.id,
      name,
      number,
    };
    dispatch(editContact(updateContact));
  };

  return (
    <div className={cl.contactsPage}>
      <div className={cl.contacts}>
        {isLoaded ? (
          items.map((item, index) => (
            <Contact
              key={`${item.id}_${index}`}
              {...item}
              handleDeleteContact={handleDeleteContact}
              handleEditContact={handleEditContact}
            />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
      {setOpenModal && (
        <MyModal isOpen={openModal} setOpen={setOpenModal}>
          <AddContact
            handleAddContact={handleAddContact}
            setOpenModal={setOpenModal}
          />
        </MyModal>
      )}

      {openEditModal && (
        <MyModal isOpen={openEditModal} setOpen={setOpenEditModal}>
          <EditContact
            saveEditContact={saveEditContact}
            setOpenModal={setOpenEditModal}
            name={editContactData.name}
            number={editContactData.number}
          />
        </MyModal>
      )}
    </div>
  );
}

export default Contacts;
