import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import CountriesDetails from './components/CountriesDetails';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        console.log(response);
        this.setState({ countries: response.data });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route
                exact
                path="/project/:countrieName"
                render={(props) => (
                  <CountriesDetails
                    {...props}
                    countries={this.state.countries}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
