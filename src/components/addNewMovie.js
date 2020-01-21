import React from "react";
import { Helmet } from "react-helmet";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "The Fifth Element",
        description:
          "In the colorful future, a cab driver unwittingly becomes the central figure in.",
        director: "Luc Besson",
        rating: 4.7,
        redirect: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelRedirect = this.handelRedirect.bind(this);
    this.handleAddAnother = this.handleAddAnother.bind(this);

  }


  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const movie = {
      title: this.state.title,
      description: this.state.description,
      director: this.state.director,
      rating: this.state.rating,
    } 

    axios.post( "http://3.120.96.16:3001/movies", movie)
    .then(res => {
      console.log(res.data);
      this.setState({redirect: 1});
    });
     
  
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
       title: "", description: "", director: "", rating: "", redirect: 0, 
    });
  }

  handleAddAnother() {
    this.setState({
       title: "", description: "", director: "", rating: "", redirect: 0, 
    });
  }

  handelRedirect() {
    setTimeout(() => {
      this.setState({ redirect: 2 });
    }, 3000);
  }


  render() {
    console.log(this.state);
    let addMovie;

    if(this.state.redirect === 1) { /// Varför?
      if (window.confirm("You added a movie.Do you want to add another movie?")) { 
        this.handleAddAnother();
      } else {
        this.handelRedirect();
      }
    } else if (this.state.redirect === 2) {
      return <Redirect to="/" />;
    } else {
      addMovie = <div>
        <h2>Add your favorite movie</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Title: </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name='title'
              value={this.state.title}
            ></input>

            <label>Director: </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name='director'
              value={this.state.director}
            ></input>

            <label>Description: </label>
            <textarea
              onChange={this.handleInputChange}
              type="text"
              name='description'
              value={this.state.description}
            ></textarea>

            <label>Rating: </label>
            <input
              onChange={this.handleInputChange}
              type="number"
              name='rating'
              value={this.state.rating}
            ></input>

            <button>Add</button>
            <button onClick={this.handleReset}>Reset</button>
          </form>
      </div>
    }


    return (
      <>
        <Helmet>
          <title>Add movie</title>
        </Helmet>
        <div className={"addContainer"}>
          {addMovie}
        </div>
      </>
    );
  }
}

export default AddMovie;
