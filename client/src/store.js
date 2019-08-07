import { createStore } from "redux";

import contactsReducer from "./reducers/contacts.reducer";

const store = createStore(contactsReducer);

export default store;
