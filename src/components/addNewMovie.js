import React from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import axios from "axios";

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

  handleAddAnother() {
    this.setState({
      title: "",
      description: "",
      director: "",
      rating: "",
      redirect: 0
    });
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  }

  handelRedirect() {
    setTimeout(() => {
      this.setState({ redirect: 2 });
    }, 1500);
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      title: "",
      description: "",
      director: "",
      rating: "",
      redirect: 0
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: this.state.title,
      description: this.state.description,
      director: this.state.director,
      rating: this.state.rating
    };

    if (
      movie.title.trim().length !== 0 &&
      movie.description.trim().length !== 0 &&
      movie.director.trim().length !== 0
    ) {
      axios
        .post("http://3.120.96.16:3001/movies", movie)
        .then(res => {
          console.log(res.data);
          this.setState({ redirect: 1 });
          if (this.state.redirect === 1) {
            if (
              window.confirm(
                "You added a movie.Do you want to add another movie?"
              )
            ) {
              this.handleAddAnother();
            } else {
              this.handelRedirect();
            }
          }
        })
        .catch(err => {
          console.log("Err", err);
          this.setState({ redirect: 4 });
          this.handelRedirect();
        });
    }
  }
  onKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  };

  render() {
    let addMovie;
    let error;

    if (this.state.redirect === 4) {
      error = (
        <div className="error">
          Sorry, something went wrong could not add the movie. You will be
          redirected to the main paige
        </div>
      );
    } else if (this.state.redirect === 2) {
      return <Redirect to="/" />;
    } else {
      addMovie = (
        <div>
          <h2>Add your favorite movie</h2>
          <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress}>
            <label>Title: </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="title"
              value={this.state.title}
              required
              minLength="1"
              maxLength="40"
            ></input>

            <label>Director: </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="director"
              value={this.state.director}
              required
              minLength="1"
              maxLength="40"
            ></input>

            <label>Description: </label>
            <textarea
              onChange={this.handleInputChange}
              type="text"
              name="description"
              value={this.state.description}
              required
              minLength="1"
              maxLength="300"
            ></textarea>

            <label>Rating: </label>
            <input
              onChange={this.handleInputChange}
              type="number"
              name="rating"
              value={this.state.rating}
              required
              min="0"
              max="5"
              step="0.1"
            ></input>

            <button>Add</button>
            <button onClick={this.handleReset}>Reset</button>
          </form>
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>Add movie</title>
        </Helmet>
        <div className={"addContainer"}>
          {error}
          {addMovie}
        </div>
      </>
    );
  }
}

export default AddMovie;