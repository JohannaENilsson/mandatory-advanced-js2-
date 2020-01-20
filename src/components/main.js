import React from "react";
import { Helmet } from "react-helmet";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    console.log(this.props.movies);
  }

  render() {

    let movies = this.props.movies;

        const movieList = movies.map(movie => {
          return (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
            </tr>
          )
        });
    return (
      <>
        <Helmet>
          <title>Main</title>
        </Helmet>
        <div className={"tableContainer"}>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
            {movieList}
            </tbody>
          </table>
          
        </div>
      </>
    );
  }
}

export default Main;


