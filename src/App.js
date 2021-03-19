import React, { Component } from 'react'
import NavBar from './Components/NavBar.jsx'
import CountriesList from './Components/CountriesList.jsx'
import CountriesDetails from './Components/CountryDetails.jsx'
import { Switch, Route } from 'react-router-dom'
// import CountriesJSON from './countries.json'
import './App.css';


export class App extends Component {
  state = {
    loading: true,
    countryList: null,
  }

  async componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(url);
    const data = await response.json()
    this.setState({countryList: data, loading: false})
  }
  
  
  
  render() {
    
 
    return (
      <div className="App">
      <NavBar />
        <div className="container">
            { this.state.loading ? <div>loading...</div> :
          <div className="row">

            <CountriesList countries={this.state.countryList}/>        
            <Switch>
              <Route path="/:id" render={(historyProps) => {
                return < CountriesDetails {...historyProps} countries={this.state.countryList}/>

              }} />
            </Switch>
          </div>
            }
        
        </div>
           
      </div>
    )
  }
}

export default App

