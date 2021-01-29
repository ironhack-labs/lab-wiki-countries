import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

//import countries from './countries.json';

class App extends Component {
  state = {
    countries: [],
    loadError: null
  }

  componentDidMount() {
    // https://countries.tech-savvy.tech/
    fetch("/countries.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('could not fetch data');
        }
        return response.json();
      })
      .then(data => this.setState({
        countries: data
      }))
      .catch((err) => this.setState({
        loadError: err
      }))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            {this.state.loadError && (
              <h2>Error: {this.state.loadError.message}</h2>
            )}
            {this.state.countries.length > 0 && (
              <>
                <CountriesList countries={this.state.countries} />
                <Switch>
                  <Route 
                    exact path="/:id"
                    render={(props) => <CountryDetails {...props} countries={this.state.countries} />}  
                  />
                </Switch>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
