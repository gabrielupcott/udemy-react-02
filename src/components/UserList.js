import React from "react";
import styles from "./UserList.module.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.key} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
