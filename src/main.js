import React from "react";
import { Helmet } from "react-helmet";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount(){
    console.log(this.props.movies);
  }

  componentDidUpdate(){
    console.log(this.props.movies);
  }

  render() {
  

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
          </table>
        </div>
      </>
    );
  }
}

export default Main;

// let movies = this.state.movies;

//         const movieList = movies.map(movie => {
//           return (
//             <tr key={movie.id}>
//               <td>{movie.title}</td>
//               <td>{movie.director}</td>
//               <td>{movie.rating}</td>
//             </tr>
//           )
//         });
