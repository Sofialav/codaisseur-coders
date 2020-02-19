import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/postActions";
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }

  render() {
    const post = this.props.post;
    if (!post.showPost || !post.comments) {
      return <p>"Loading..."</p>;
    }
    console.log("render", post.showPost);
    return (
      <div>
        <h1>{post.showPost.title}</h1>
        <ReactMarkdown source={post.showPost.content} />
        <ul>
          {this.props.post.comments.map(comm => {
            return <li key={comm.id}>{comm.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { post: reduxState.post };
}

export default connect(mapStateToProps)(PostPage);
