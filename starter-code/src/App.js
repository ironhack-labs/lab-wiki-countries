import React from 'react';
import './App.css';
import WikiCountries from './pages/WikiCountries';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title-page">
          <div className="welcome-title">
          <h2>WikiCountries</h2>
          </div>
          <WikiCountries />
        </div>
        
      </div>
    );
  }
}

export default App;
