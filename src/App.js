import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  state = {
    countries: []
  }

  componentDidMount = async () => {
     const countriesList = await axios.get("https://countries.tech-savvy.tech/countries")
    this.setState({ countries: countriesList.data})
  }

  render() {

    return (
      <>
      <Navbar />
      <div className="container" style={{paddingTop: '25px', paddingBottom:'25px'}}>
        <div className="row">
          <CountriesList countries={this.state.countries} />
          <Switch>
            {/* <Route exact path='/:id' component={CountryDetails} countries={this.state.countries} key={['HelloKey :D', 'ByeByeKey :(']} /> */}

            <Route exact path='/:id' render={(props) => (<CountryDetails {...props} countries={this.state.countries} />)}/>
            {/* <Route exact path='/:id' component={() => <CountryDetails countries={this.state.countries} />}/> */}
          </Switch>
        </div>
      </div>
      </>
    );
  }
}

export default App;
