import React from 'react';
import './App.css';
import CountriesList from './components/countries-list/CountriesList';
import CountryDetails from './components/country-details/CountryDetails';
import Navbar from './components/navbar/Navbar';
import countries from './countries.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
  state = {
    countries: null
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ countries })
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
                  <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                    {this.state.countries === null ? (
                    <div>Loading...</div>
                    ) : (
                    <CountriesList countries={this.state.countries}/>
                    )}
                  </div>  
                  <div className="col-7">
                    <Route 
                      exact 
                      path="/:cca3" 
                      component={(props) => <CountryDetails {...props} countries={this.state.countries}/>}>
                      </Route>
                  </div>                            
              </div>

      </div>
    );    
  }
}

export default App;
