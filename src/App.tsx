import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import MenuBar from './Assets/MenuBar';
import HomePage from './Views/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
