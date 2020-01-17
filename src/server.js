import React from "react";
import axios from "axios";

class Server extends React.Component {
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
      .then(
        (this.sendData = () => {
          this.props.getServerData(this.state.movies);
          console.log("when am i happend?");
        })
      )
      .catch(err => {
        console.log("Err", err);
      });
  }

  render() {
    return <></>;
  }
}

export default Server;
