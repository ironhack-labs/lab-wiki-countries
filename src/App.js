import React from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import axios from 'axios'
import CountryDetails from './components/CountryDetails'

import {Route, Switch} from 'react-router-dom'

class App extends React.Component{

  state = {
    countries: []
  }

  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(result => {
        this.setState({countries: result.data})
      })
      .catch(error => {
        console.log(error)
      })   
  }

  render(){
    return (
      <div className="App">

        <Navbar />

        <div className="columns">

          <CountriesList countries={this.state.countries} />

          <Switch>
            <Route path="/country/:cca3" component={routeProps=><CountryDetails {...routeProps} countries={this.state.countries}/>} />
          </Switch>

        </div>
      </div>      
    )
  }
}

export default App;
