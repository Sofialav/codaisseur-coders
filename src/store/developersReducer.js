const initialState = null;
export default function developersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_DEVELOPERS":
      return action.payload;
    default:
      return state;
  }
}
