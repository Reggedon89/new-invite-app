import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNewUser, going, notGoing } from "../actions/contacts.actions";
import "font-awesome/css/font-awesome.css";

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
    <div className="page-wrapper">
      <div className="currentUser">
        <div className="going-wrapper">
          <p>Going:{goingUsers.length}</p>
          <p>Not Going:{notGoingUsers.length}</p>
        </div>
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
        <div className="button-wrapper">
          <button className="going" disabled={disabled} onClick={setGoing}>
            <i class="fa fa-check" />
          </button>
          <button
            className="notGoing"
            disabled={disabled}
            onClick={setNotGoing}
          >
            <i class="fa fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
};
