import React from 'react';
import './App.css';
import countries from './countries.json'

import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

class App extends React.Component{

  state = {
    countries: countries,
    countryNow: null
  }

  componentDidMount(){
    this.setState({...this.state, countries: countries})
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route path='/country/:cca3' component={(routeProps)=>{
            return <CountryDetails {...routeProps} countries={this.state.countries}/>
          }}
          />
        </Switch>

        <Navbar />
        <CountriesList countries={this.state.countries} />
        
      </div>
    )
  }
}

export default App;
