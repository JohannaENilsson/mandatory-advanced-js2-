import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from './main.js';
import Nav from './nav.js';
import AddMovie from './addNewMovie.js';
import Server from './server.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {movies: []}
    this.getServerData = this.getServerData.bind(this);
    // this.sendServerData = this.sendServerData.bind(this);
  }


getServerData = (childData) => {
  console.log('childData', childData);
  this.setState({movies: childData});
  
}



  render(){
    console.log('App got data ', this.state.movies);
    
    return (
      <div className="App">
        <Router>
          <header>
            <h1>The best movies</h1>
          <Nav />
          </header>
          <Route path='/main' component={Main}/>
          <Route path='/add-movie' component={AddMovie} />
        </Router>
        
        
        <Server getServerData= {this.getServerData}/>
        <Main movies={this.state.movies} />
        
        
      </div>
    );
  }
}

export default App;
