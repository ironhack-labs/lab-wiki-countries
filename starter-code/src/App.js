import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import allTheCountries from './countries.json';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      countries: allTheCountries
    }
  }

  showCountries = () => {
    return this.state.countries.map((eachCountry) => (
        <div key={eachCountry.cca3}>
          <Link to={'/'+eachCountry.cca3}>
            {eachCountry.name.common}
          </Link>
        </div>

      ))

  }

  render(){
    return <div>
      { this.showCountries() }
    </div>
  }
}

export default App;
