import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  state = {
    countriesList: []
  };

  componentDidMount() {
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((res) => {
        this.setState({
          countriesList: res.data,
        });
      })
    
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countriesList} />
            <Route
              path="/:cca3"
              render={(routeProps) => {
                return (
                  <CountryDetails
                    countriesList={this.state.countriesList}
                    {...routeProps}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
