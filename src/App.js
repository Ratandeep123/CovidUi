import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/component/Navbar.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );

  }
}

export default App;
