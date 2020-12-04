import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountryDetails from './components/CountryDetails/CountryDetails';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {

state = {
  countries: countries
}

render() {
return(
   <div className="App">
      <BrowserRouter>
      <Navbar />
      <CountriesList countries={this.state.countries}/> 
      <Switch>
        <Route exact path="/countrydetails/:countryid" component={CountryDetails}/>
      </Switch>
      </BrowserRouter>
    </div>
  );

}

componentDidMount() {
  this.setState( { countries: countries } )
}

}


export default App; 