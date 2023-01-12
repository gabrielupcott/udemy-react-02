import React, { useState } from "react";
import UserList from "./components/UserList";
import UserInput from "./components/UserInput/UserInput";
import Modal from "./components/Modal";
import styles from "./App.module.css";

function App() {
  // for testing:
  // const [currentUsers, setCurrentUsers] = useState([
  //   {
  //     key: "u1",
  //     name: "Max",
  //     age: 29,
  //   },
  //   {
  //     key: "u2",
  //     name: "Gabe",
  //     age: 21,
  //   },
  // ]);

  const [currentUsers, setCurrentUsers] = useState([]);
  const [isUsers, setIsUsers] = useState(false);
  const [isBadInput, setIsBadInput] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const modalHandler = (errorMessage) => {
    if (!isBadInput) {
      setIsBadInput(true);
      setModalContent(errorMessage);
    } else setIsBadInput(false);
  };

  const addNewUser = (newName, newAge) => {
    setIsUsers(true);
    const newUser = {
      key: Math.random().toString(),
      name: newName,
      age: newAge,
    };

    setCurrentUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  // TODO (maybe):
  // could have moved the section divs to inside of their respective components
  // and make them into a 'Card.js' component
  // this means also moving the modal logic into the UserInput.js component
  return (
    <div>
      <div className={styles.section}>
        <UserInput onAddNewUser={addNewUser} onBadInput={modalHandler} />
      </div>
      {isUsers && (
        <div className={styles.section}>
          <UserList users={currentUsers} />
        </div>
      )}
      {isBadInput && <Modal closeModal={modalHandler} content={modalContent} />}
    </div>
  );
}

export default App;
