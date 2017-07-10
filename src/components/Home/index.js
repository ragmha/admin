import React, { Component } from "react";
import { Link } from "react-router";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administrator</h1>
        <p>Eh........</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}

export default Home;
