import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route path={'/'} component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
