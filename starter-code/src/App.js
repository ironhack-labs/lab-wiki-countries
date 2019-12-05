import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import LeftMenu from './components/LeftMenu';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 country-box">
            <div className="list-group">
              <LeftMenu />
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default App;