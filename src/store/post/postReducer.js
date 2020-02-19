const initialState = { post: "", comments: [] };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POST":
      return action.payload;
    default:
      return state;
  }
}
