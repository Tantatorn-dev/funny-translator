import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './Views/HomePage';
import About from './Views/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
