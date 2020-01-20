import React from "react";
import { Link, withRouter} from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Link to="/"> Main </Link>
        <Link to="/add-Movie"> Add new movie </Link>
      </>
    );
  }
}

export default Nav;
// export default withRouter(Nav);
