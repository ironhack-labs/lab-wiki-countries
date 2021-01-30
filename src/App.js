import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {CountriesList} from './components/CountriesList';
import {CountryDetails} from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      countries: []
    }
  }

  componentDidMount() {
    fetch('/countries.json')
      .then(res => res.json())
      .then(result => {
        this.setState({
          countries: result
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {this.state.countries.length > 0 ? 
          <div className="row">
            <CountriesList countries={this.state.countries} />
              <Switch>
                <Route path='/:cca3' render={(props) => {
                    return <CountryDetails {...props} countries={this.state.countries} />
                  }}   
                />
              </Switch>
          </div> : 'There are no countries to display' }
        </div>
      </div>
    );
  }
}

export default App;
