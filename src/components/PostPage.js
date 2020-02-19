import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/postActions";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }

  render() {
    const title = "??";
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { post: reduxState.post };
}

export default connect(mapStateToProps)(PostPage);
