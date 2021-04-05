import React, { Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails'
import axios from 'axios';
import SyncLoader from 'react-spinners/SyncLoader'

class App extends Component {

  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        console.log("res", res)
        this.setState({countries: res.data, loading: false}
      )})
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        {
          this.state.loading
            ? (
              <div className="text-center">
                <SyncLoader color="blue" />
              </div>
            )
            :
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <CountriesList countries={this.state.countries}/>
                </div>
                <div className="col-sm-6">
                  <Switch>
                    <Route path="/:code" render={(props) => <CountryDetails {...props} countries={this.state.countries}/>} />
                  </Switch>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;
