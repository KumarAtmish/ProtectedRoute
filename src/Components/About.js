import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to about Page</h1>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </div>
    );
  }
}
