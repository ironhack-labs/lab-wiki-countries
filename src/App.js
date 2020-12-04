import React from 'react';
import data from './countries.json';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    product: [],
  };

  componentDidMount = () => {
    this.setState({
      product: data,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <CountriesList countries={data} />
            </div>
            <div className="col-7">
              <Route
                exact
                path="/:id"
                render={(reactRouterProps) => (
                  <CountryDetails {...reactRouterProps} countries={data} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
