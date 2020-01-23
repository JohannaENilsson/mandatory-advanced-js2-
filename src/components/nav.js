import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Link to="/"> Main </Link>
        <Link to="/add-Movie"> Add movie </Link>
      </>
    );
  }
}

export default Nav;
