const initialState = {
  new: {},
  going: [],
  notgoing: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_NEW_USER":
      return { ...state, new: action.payload };
    case "GET_GOING":
      return { ...state, going: action.payload };
    case "GET_NOT_GOING":
      return { ...state, notgoing: action.payload };
    case "ADD_GOING":
      return { ...state, going: [...state.going, action.payload] };
    case "ADD_NOT_GOING":
      return { ...state, notgoing: [...state.notgoing, action.payload] };
    default:
      return state;
  }
}
