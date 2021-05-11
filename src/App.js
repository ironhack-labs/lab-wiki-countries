import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route } from 'react-router-dom'
import React from 'react';
import countries_data from './countries.json';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  };
  componentDidMount() {
    this.setState({
      countries: countries_data
    })
  };

  render() {
    return (
    <div>
<Navbar/>
     {/* <div><CountriesList /></div> */}
     <div className='container'>
     <CountriesList countries={this.state.countries} />
     </div>
     <Route exact path="/countries/:id" render={(props) => 
     <CountryDetails {...props} countries={this.state.countries} />} />
   </div>
  )
}
};