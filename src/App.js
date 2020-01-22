import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Main from './components/Main.js';
import About from './components/About.js';
import Nav from './components/Nav.js';
import AddMovie from './components/AddNewMovie.js';
import Edit from './components/Edit.js';


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
          <Route path='/edit/:id' component={Edit} />
        </Router>
        
        
      </div>
    );
  }
}

export default App;
