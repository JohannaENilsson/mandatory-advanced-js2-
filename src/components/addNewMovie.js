import React from "react";
import { Helmet } from "react-helmet";

class AddMovie extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Add movie</title>
        </Helmet>
        <div className={'addContainer'}>
            <h2>Add your favorite movie</h2>

        </div>
      </>
    );
  }
}

export default AddMovie;
