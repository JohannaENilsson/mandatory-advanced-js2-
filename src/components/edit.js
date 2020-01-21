import React from "react";
import { Helmet } from "react-helmet";
import {Redirect} from 'react-router-dom';
import axios from 'axios';



class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
        title: "",
        description:
          "",
        director: "",
        rating: 0,
        redirect: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handelRedirect = this.handelRedirect.bind(this);
 

  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    axios
      .get("http://3.120.96.16:3001/movies/" + id)
      .then(res => {
        let data = res.data;
        console.log(data);

        if (data) {
          this.setState({ 
            id: data.id,
            title: data.title,
            description: data.description,
            director: data.director,
            rating: data.rating
           });
        }
      })
      .catch(err => {
        console.log("Err", err);
        this.setState({ redirect: 1 });
        // this.handelRedirect();
      });
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

    axios.put( "http://3.120.96.16:3001/movies/" + this.state.id, movie)
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


  render(){  
    console.log(this.state);  
    let editMovie;

    editMovie = <div>
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

    return (
      <>
      <Helmet>
      <title>{this.state.title}</title>
    </Helmet>
      <div className="addContainer">
        
        {editMovie}

        
      </div>
      </>
    );
  }
}

export default Edit;
