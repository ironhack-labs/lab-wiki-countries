import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'
import { Route } from 'react-router-dom';
import countries from './countries.json'

class App extends Component {

    constructor(){
      super()
      this.state = {
        listCountries: []
      }
    }

    componentDidMount() {

      this.setState({ listCountries: countries })

    }

  render(){
    return (
      <>
        <div>
          <NavBar />
        </div>
        <div className="container">
          <div className="row">
            <CountriesList countries={countries}/>
            {<Route path="/:id" component={CountryDetails} />}
      </div>
    </div>  
  </>
  )
  }
}

export default App;
