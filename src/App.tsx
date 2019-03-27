import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './Views/HomePage';
import AboutMe from './Views/AboutMe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutMe} />
        </Router>
      </div>
    );
  }
}

export default App;
