import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
//import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    CountriesList: []
  };

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((res) => {
        this.setState({
          CountriesList: res.data
        })
    });
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countriesList} />
            <Route path="/:cca3" render={(routeProps) => {
              return( <CountryDetails countriesList={this.state.countriesList} {...routeProps} /> );
            }}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
