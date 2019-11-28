import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './navbar.js'
import Container from './container.js'
import CountryInfo from './countryInfo.js'

// const NotFound = () => {
//   return <div>404 not found</div>;
// };

function App() {
  return (
    <div className="CountryWiki">
      <Navbar />
      <div className="container">
        <div className="row">
          <Container />
          <Route exact path="/:id" component={CountryInfo} />
          {/* <Route component={NotFound} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
