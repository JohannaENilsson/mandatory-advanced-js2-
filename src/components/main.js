import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://3.120.96.16:3001/movies")
      .then(res => {
        this.setState({ movies: res.data });
        console.log("Server got data ", this.state.movies);
        console.log(res.status);
      })
      .catch(err => {
        console.log("Err", err);
      });
  }

  render() {
    let table;
    let loading;
    let movieList;

    if (this.state.movies.length !== 0) {
      let movies = this.state.movies;

      movieList = movies.map(movie => {
        return (
          <tr key={movie.id}>
            
            <td><Link to={'/main/' + movie.id}>{movie.title}</Link></td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td>
              <button><Link to={'/edit/' + movie.id}>Edit</Link></button>
            </td>
            <td>
              <button>Delete</button>
            </td>
            
          </tr>
        );
      });

      table = (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{movieList}</tbody>
        </table>
      );
    } else {
      loading = (
        <div>No movies in the list. PLease add some on the button above.</div>
      );
    }

    return (
      <>
        <Helmet>
          <title>Main</title>
        </Helmet>
        <div className={"tableContainer"}>
          {loading}
          {table}
        </div>
      </>
    );
  }
}

export default Main;
