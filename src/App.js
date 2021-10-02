import React from 'react';
import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar.js'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      countries: countries,
    };
  }

  componentDidMount() {
    console.log('Component DID MOUNT.');
  }

  render() {
    return (
      <main>

        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            
            <Route exact path="/country/:id" component={CountryDetails} />
            
          </div>
        </div>
        
      </main>
      
    )
  }
}



export default App;