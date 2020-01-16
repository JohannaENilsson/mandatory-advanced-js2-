import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from './main.js';
import Nav from './nav.js';
import AddMovie from './addNewMovie.js';
import Server from './server.js';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <header>
            <h1>The best movies</h1>
          <Nav />
          </header>
          <Route exact path='/' component={Main} />
          <Route path='/add-movie' component={AddMovie} />
        </Router>
        <Server />
        
      </div>
    );
  }
}

export default App;
