import React from "react";
import Button from "./UserInput/Button";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const onCloseModalHandler = (event) => {
    props.closeModal();
  };

  return (
    <div className={styles.backdrop} onClick={onCloseModalHandler}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.actions}>
          <Button type="button" onClick={onCloseModalHandler}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
