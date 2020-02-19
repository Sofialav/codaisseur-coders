import api from "../../api";

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });
    api(`/posts/${id}/comments`).then(comment => {
      console.log("Thunk has been called", comment.rows);
      dispatch(setComments(comment.rows));
    });
  };
}

export function setPost(post) {
  console.log("set_post function", post);
  return {
    type: "SET_POST",
    payload: post
  };
}

export function setComments(comments) {
  console.log("set_comments function", comments);
  return {
    type: "SET_COMMENTS",
    payload: comments
  };
}
