import React, { useState } from "react";
import styles from "./UserInput.module.css";
import Button from "./Button";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    if (event.target.value.length > 0) setNameIsValid(true);
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    if (event.target.value.length > 0) setAgeIsValid(true);
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let badName = false;
    let badAge = false;
    if (enteredName.length <= 0) {
      setNameIsValid(false);
      badName = true;
    }
    if (
      enteredAge.length <= 0 ||
      parseInt(enteredAge) < 1 ||
      isNaN(parseInt(enteredAge))
    ) {
      setAgeIsValid(false);
      badAge = true;
    }
    if (badName && badAge)
      props.onBadInput("Please enter a valid name and age (non-empty values).");
    else if (badName && !badAge)
      props.onBadInput("Please enter a valid name (non-empty values).");
    else if (!badName && badAge) props.onBadInput("Please enter a age (>0).");
    else {
      setEnteredName("");
      setEnteredAge("");
      props.onAddNewUser(enteredName, enteredAge);
    }
  };

  return (
    <form>
      <div className={styles.input}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className={`${!nameIsValid && styles.invalid}`}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          className={`${!ageIsValid && styles.invalid}`}
          onChange={ageInputChangeHandler}
          value={enteredAge}
        />
        <Button type="submit" onClick={formSubmitHandler}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UserInput;
