import React from "react";

import cl from "./myModal.module.css";

function MyModal({ children, isOpen, setOpen }) {
  return (
    <div
      className={isOpen ? cl.modalWrap + " " + cl.modalActive : cl.modalWrap}
      onClick={() => setOpen(false)}
    >
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
