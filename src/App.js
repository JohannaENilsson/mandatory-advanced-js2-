import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from './components/main.js';
import About from './components/about.js';
import Nav from './components/nav.js';
import AddMovie from './components/addNewMovie.js';


class App extends React.Component {

  render(){    
    return (
      <div className="App">
        <Router>
          <header>
            <h1>The best movies</h1>
          <Nav />
          </header>
          <Route exact path='/' component={Main}/>
          <Route path='/add-movie' component={AddMovie} />
          <Route path='/main/:id' component={About} />
        </Router>
        
        
      </div>
    );
  }
}

export default App;
