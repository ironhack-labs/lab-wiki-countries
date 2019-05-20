import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainWindow from './components/MainWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainWindow />
      </div>
    );
  }
}

export default App;
