import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar/NavBar'
import ExactCountry from './Components/country/ExactCountry'
// import QueryCountry from './Components/query/QueryCountry'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json'
import QueryCountry from './Components/query/QueryCountry';
class App extends Component {
  state={
    button: true,
    search: false,
    countries: countries
  }
  toggleToList = ()=>{
    if(this.state.button === false){
      this.setState({
        button: true,
        search: false
      })
    }
  }
  toggleToQuery = ()=>{
    if(this.state.search === false){
      this.setState({
        button: false,
        search: true
      })
    }
  }
  render() {
    console.log("the state in the app js >>>>>>>>>>>> ", this.state)
   return (
      <div className="App">
         <button onClick={this.toggleToList}>Search by List</button>
         <button onClick={this.toggleToQuery}><Link activeclassname="active" exact to="/searchCountry">Search by Query</Link></button>
       <div class="body">
      <div className="listOf">
      {this.state.button &&
      <NavBar countries={this.state.countries}/>
      }
      {this.state.search && 
      <QueryCountry/>
      }
      </div>
      <Switch>
          <Route exact path='/countryInfo/:country' component={ExactCountry}/>
        </Switch>
       </div>
      </div>
    );
  }
}

export default App;
