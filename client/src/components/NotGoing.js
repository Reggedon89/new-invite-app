import React, { useEffect } from "react";
import { useSelector } from "react-redux";
export default props => {
  const notGoing = useSelector(appState => appState.going);

  return (
    <div>
      {notGoing.map((user, i) => (
        <div key={"user" + i} className="currentUser">
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
        </div>
      ))}
    </div>
  );
};
