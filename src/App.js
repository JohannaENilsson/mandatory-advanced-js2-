import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./Main.css";
import "./Nav.css";
import "./Add-Edit.css";
import Main from "./components/Main.js";
import About from "./components/About.js";
import Nav from "./components/Nav.js";
import Add from "./components/Add.js";
import Edit from "./components/Edit.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <h1>The movies</h1>
            <div className="head">
              <Nav />
            </div>
          </header>

          <Route exact path="/" component={Main} />
          <Route path="/add" component={Add} />
          <Route path="/main/:id" component={About} />
          <Route path="/edit/:id" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;
