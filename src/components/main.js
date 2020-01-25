import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SearchForm from './SearchForm.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], search: '' };
    
    this.handleGetReq = this.handleGetReq.bind(this);
    this.handleDeleteReq = this.handleDeleteReq.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.handleGetReq();
  }

  onChange(value){
    this.setState({search: value});
  }

  handleGetReq(){
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
handleDeleteReq(e){
  let id = e.target.id;
  console.log(id);
  axios.delete("http://3.120.96.16:3001/movies/" + id)
  .then(res => {
    console.log(res.status);
    this.handleGetReq();
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

      movieList = movies.filter(movie => {
        if(movie.title.toLowerCase().includes(this.state.search.toLowerCase()) || movie.director.toLowerCase().includes(this.state.search.toLowerCase())) return movie;
      })
      .map(movie => {
        return (
          <tr key={movie.id}>
            
            <td><Link to={'/main/' + movie.id}>{movie.title}</Link></td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td>
              <button><Link to={'/edit/' + movie.id}>Edit</Link></button>
            </td>
            <td>
              <button onClick={this.handleDeleteReq} id={movie.id}>Delete</button>
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
          <SearchForm onChange={this.onChange} search={this.state.search}/>
          {loading}
          {table}
        </div>
      </>
    );
  }
}

export default Main;
