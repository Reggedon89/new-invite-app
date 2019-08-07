import store from "../store";
import axios from "axios";
import shortid from "shortid";

init();

export function getNewUser(id) {
  const appState = store.getState();
  const exists =
    appState.going.filter(user => user.id === id).length +
    appState.notgoing.filter(user => user.id === id).length;
  const isNewUser = appState.new.id === id && id !== undefined;
  if (!exists && !isNewUser) {
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
}

export function going(id) {
  axios.post("/api/going", store.getState().new).then(resp => {
    store.dispatch({
      type: "ADD_GOING",
      payload: resp.data.user
    });
    getNewUser();
  });
}

export function notGoing(id) {
  axios.post("/api/notgoing", store.getState().new).then(resp => {
    store.dispatch({
      type: "ADD_NOT_GOING",
      payload: resp.data.user
    });
    getNewUser();
  });
}
function init() {
  axios.get("/api/going").then(resp => {
    getGoing(resp.data);
  });
  axios.get("/api/notgoing").then(resp => {
    getNotGoing(resp.data);
  });
}
function getNotGoing(users) {
  store.dispatch({
    type: "GET_NOT_GOING",
    payload: users
  });
}
function getGoing(users) {
  store.dispatch({
    type: "GET_GOING",
    payload: users
  });
}
