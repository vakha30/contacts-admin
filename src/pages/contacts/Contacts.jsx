import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/actions/contacts";

import Contact from "../../components/contact/Contact";

import cl from "./contacts.module.css";
import { Button, CircularProgress } from "@material-ui/core";

import MyModal from "../../components/ui/myModal/MyModal";
import AddContact from "../../components/addContact/AddContact";

function Contacts() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState();
  const { items, isLoaded } = useSelector(({ contacts }) => contacts);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const clickOpenModal = () => {
    setOpenModal(true);
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
        <AddContact />
      </MyModal>
    </div>
  );
}

export default Contacts;
