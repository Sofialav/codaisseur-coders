import api from "../api";
import { developersFetched } from "./developers/developersActions";

export function fetchDevelopers(dispatch, getState) {
  api("/developers?limit=20").then(data => {
    console.log("Thunk has been called");
    // note: just `dispatch` here now
    dispatch(developersFetched(data.rows));
  });
}
