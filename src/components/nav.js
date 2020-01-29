import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
      
        <Link className='nav' to="/"> Main </Link>
        <Link className='nav' to="/add"> Add </Link>
      </>
    );
  }
}

export default Nav;
