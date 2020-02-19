const initialState = { showPost: null, comments: [] };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POST":
      return { ...state, showPost: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}
