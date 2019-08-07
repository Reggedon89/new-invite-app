import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNewUser, going, notGoing } from "../actions/contacts.actions";

export default props => {
  const user = useSelector(appState => appState.new);
  const goingUsers = useSelector(appState => appState.going);
  const notGoingUsers = useSelector(appState => appState.notgoing);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getNewUser(user.id);
    setDisabled(false);
  }, [user.id]);

  function setGoing() {
    going(user.id);
    setDisabled(true);
  }

  function setNotGoing() {
    notGoing(user.id);
    setDisabled(true);
  }

  return (
    <div className="currentUser">
      <p>Going:{goingUsers.length}</p>
      <p>Not Going:{notGoingUsers.length}</p>
      <img src={user.image} />
      <p>
        <b>Name:</b>
        {user.fname} {user.lname}
      </p>
      <p>
        <b>Email:</b>
        {user.email}
      </p>
      <p>
        <b>Phone:</b>
        {user.phone}
      </p>
      <button disabled={disabled} onClick={setGoing}>
        Going
      </button>
      <button disabled={disabled} onClick={setNotGoing}>
        Not Going
      </button>
    </div>
  );
};
