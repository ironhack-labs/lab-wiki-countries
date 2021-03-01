import React from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import countries from './countries.json';

class App extends React.Component {

  state = {
    countries: countries,
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={CountriesList} />
            <Route path="/countries/:countryCCA3" component={CountryDetails} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
