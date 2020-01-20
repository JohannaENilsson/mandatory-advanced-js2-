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
        if (data.length === 1) {
          this.setState({ movie: data[0] });
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
    let redirect;

    if (this.state.redirect === 1) {
      redirect = (
        <div className="error">
          This movie is not available anymore. you will be redirected to the
          main paige
        </div>
      );
    } else if (this.state.redirect === 2) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Helmet>
          <title> .... </title>
        </Helmet>
        <div className={"aboutContainer"}>
          {redirect}
          <h2>{}</h2>
          <p>om filmen</p>
        </div>
      </>
    );
  }
}

export default About;
