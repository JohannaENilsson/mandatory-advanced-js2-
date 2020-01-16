import React from "react";
import { Helmet } from "react-helmet";

class Main extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Main</title>
        </Helmet>
        <div className={'tableContainer'}>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Rating</th>
                    </tr>
                </thead>
            </table>

        </div>
      </>
    );
  }
}

export default Main;
