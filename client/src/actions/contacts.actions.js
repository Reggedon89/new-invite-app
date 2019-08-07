import store from "../store";
import axios from "axios";
import shortid from "shortid";

export function getNewUser() {
  axios.get("https://randomuser.me/api").then(resp => {
    const data = resp.data.results[0];
    const id = shortid.generate();

    const user = {
      id: id,
      image: data.picture.large,
      fname: data.name.first,
      lname: data.name.last,
      email: data.email,
      phone: data.phone
    };

    store.dispatch({
      type: "GET_NEW_USER",
      payload: user
    });
  });
}

export function going(id) {
  axios.post("/api/going", store.getState().new).then(resp => {
    store.dispatch({
      type: "ADD_GOING",
      payload: resp.data.user
    });
  });
}

export function notGoing(id) {
  axios.post("/api/notgoing", store.getState().new).then(resp => {
    store.dispatch({
      type: "ADD_NOT_GOING",
      payload: resp.data.user
    });
    console.log(resp.data);
  });
}
