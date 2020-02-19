import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Homepage</Link>
        <Link to="/developers">Developers list</Link>
      </div>
    );
  }
}

export default Toolbar;
