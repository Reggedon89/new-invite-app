import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getNewUser, going, notGoing } from "../actions/contacts.actions";

export default props => {
  const user = useSelector(appState => appState.new);

  useEffect(() => {
    getNewUser();
  }, []);

  function setGoing() {
    going(user.id);
  }

  function setNotGoing() {
    notGoing(user.id);
  }

  return (
    <div className="currentUser">
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
      <button onClick={setGoing}>Going</button>
      <button onClick={setNotGoing}>Not Going</button>
    </div>
  );
};
