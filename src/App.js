import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from './components/main.js';
import Nav from './components/nav.js';
import AddMovie from './components/addNewMovie.js';
import Server from './components/server.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {movies: []}
    this.getServerData = this.getServerData.bind(this);
  }


getServerData = (childData) => {
  // console.log('childData', childData);
  this.setState({movies: childData});
}

  render(){    
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
