import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

class App extends React.Component {

  state = {
    countries: [],
  };

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        res.json()
        .then((data) => {
          this.setState({countries: data})
        })
    })

  }

  render() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <CountriesList countries={this.state.countries}/>
            <Route path='/:cca3' component={CountryDetails} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
