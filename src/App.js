import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countries from './countries.json'
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  state = {
    countries: ''
  }

  componentDidMount(){

    fetch('https://countries.tech-savvy.tech/countries')
    .then(result=>{
      return result.json()
      .then(data => {
        this.setState({countries:data})
      })
    })
    .catch(err=>console.error(err))

    // const getCountries = [...countries]
    // this.setState({countries: getCountries})
  }
  renderList = () => {
    if(this.state.countries){
      return(
        <CountriesList
        countries={this.state.countries}
        />
      )
    }else {return 'Loading...'}
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='row'>
          {this.renderList()}
          <Switch>
            <Route exact path='/:id' render={(props) => {
              return(
              <CountryDetails {...props} countries={this.state.countries}/>
              )
            }} />
          </Switch>
          
          </div>
        </div>
      </div>
    )
  }
}

export default App;
