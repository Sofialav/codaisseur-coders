import React from "react";
import { connect } from "react-redux";
import api from "../api";

class DevelopersList extends React.Component {
  componentDidMount() {
    // fetching inside the component
    // fetch("https://codaisseur-coders-network.herokuapp.com/developers?limit=20")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data.rows);
    //     this.setState({
    //       developers: data.rows
    //     });
    //   });
    api("/developers?limit=20").then(data => {
      console.log(data);
      // Tell the Redux store the data has been fetched
      this.props.dispatch({
        type: "FETCHED_DEVELOPERS",
        payload: data.rows
      });
    });
  }

  render() {
    if (!this.props.developers) {
      return <p>"Loading..."</p>;
    }
    return (
      <div>
        <p>Hello! We have {this.props.developers.length} developers:</p>
        <ul>
          {this.props.developers.map(dev => {
            return (
              <li key={dev.id}>
                {dev.name} ({dev.email})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { developers: reduxState.developers };
}
export default connect(mapStateToProps)(DevelopersList);
