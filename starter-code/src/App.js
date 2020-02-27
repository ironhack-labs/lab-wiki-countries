import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from "./components/CountryDetail";
import countriesList from "./countries.json";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cList: [],
      showDetails: false};  
  }

  componentDidMount() {
    this.setState ({cList: countriesList});    
  }

  // somefunction = () =>{}

  render() {
    console.log(this.state);
    
    return (
      <div>
      <div className="countriesContainer">
        
      </div>  
        <ul>
          {
            this.state.cList.map( (country) => {
              return  <Countries  countryElement={country}  />           
            })
          }
        </ul>

        
      </div>
    )
  }
}

export default App
