import React from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, redirect: 0 };
    this.handelRedirect = this.handelRedirect.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get("http://3.120.96.16:3001/movies/" + id)
      .then(res => {
        let data = res.data;

        if (data) {
          this.setState({ movie: data });
        }
      })
      .catch(err => {
        console.log("Err", err);
        this.setState({ redirect: 1 });
        this.handelRedirect();
      });
  }

  handelRedirect() {
    setTimeout(() => {
      this.setState({ redirect: 2 });
    }, 3000);
  }

  render() {
    console.log("filmen ", this.state.movie);

    let movie = this.state.movie;
    let redirect;
    let renderMovie;

    if (this.state.redirect === 1) {
      redirect = (
        <div className="error">
          This movie is not available anymore. you will be redirected to the
          main paige
        </div>
      );
    } else if (this.state.redirect === 2) {
      return <Redirect to="/" />;
    } else {
      renderMovie = (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>{movie.director}</p>
          <p>{movie.rating}</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>{movie.title}</title>
        </Helmet>
        <div className={"aboutContainer"}>
          {redirect}
          {renderMovie}
        </div>
      </>
    );
  }
}

export default About;
