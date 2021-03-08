import Navbar from './components/navbar/Navbar';
import CountriesList from './components/counties-list/CountriesList';
import { Route } from 'react-router-dom';
import CountriesDetails from './components/countries-details/CountriesDetails';
import React from 'react';
import  Axios  from 'axios';

class App extends React.Component {

  state = {
    countries: []
  }

  componentDidMount() {
    Axios.get('https://restcountries.eu/rest/v2/all')
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries.data
        })
      })
  }

  render() {
    const { countries } = this.state;
    if (countries === []) return <h1>Loading...</h1>
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={ countries }/>
            <Route exact path="/:country" component={(props) => <CountriesDetails {...props} countries={ countries }/>}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
