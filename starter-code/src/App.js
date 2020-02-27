import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import CountryDetail from "./components/CountryDetail";
import countriesList from "./countries.json";
import {Route, Switch} from "react-router-dom";


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

        <ul>
          {
            this.state.cList.map( (country) => {
              return  <Countries  countryElement={country}  />           
            })
          }
        </ul>
        <Switch>
         <Route path="/:countryCca3" component={CountryDetail}/>

        </Switch>

        
      </div>
    )
  }
}

export default App
