import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Route} from 'react-router-dom'
// import countries from './countries.json';
import axios from 'axios'

class App extends React.Component {

  state = {
    countries: [],
  }

  componentDidMount(){
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((res) => {
        this.setState({
          countries: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '94vh', overflow: 'scroll'}}>
              <CountriesList countries={this.state.countries}/>
            </div>
            <div className="col-7">
              <Route path="/countries/:cca3" render={(autoProps) => {
                return <CountryDetails countries={this.state.countries} {...autoProps}/>}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
