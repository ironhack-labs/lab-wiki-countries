import React, { Component } from 'react';
import './App.css';
import CountryDetail from './CountryDetail'
import countries from './countries.json'
import { Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: {countries},
    };
  }


  render() {
    const { hits } = this.state;

    return (
      <div class="container">
      <div className="title"><h1>Wiki Countries</h1></div>
      
      <ul>
        {countries.map(hit =>
       
          <li>
            <div className="row">
            <div className="col-sm-4">{hit.flag}{hit.name.common}  <Link to={`/CountryDetail/${hit.cca3}`}></Link></div>
            </div>
          </li>
        )}
      </ul>
      </div>
    );
  }
}

  

export default App;