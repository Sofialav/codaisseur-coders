import { combineReducers } from "redux";
import developersReducer from "./developers/developersReducer";
import postReducer from "./post/postReducer";
export default combineReducers({
  havingFun: havingFunReducer,
  developers: developersReducer,
  post: postReducer
});

function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
