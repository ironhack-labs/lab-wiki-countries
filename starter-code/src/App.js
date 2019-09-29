import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import countriesData from './countries.json';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      countryList: countriesData,
    
    }
  }

  async componentDidMount(){  
  const theCountry = await this.getCountry();

  this.setState({
    countryList: theCountry
  })
   }

   getCountry = async() => {
     return  countriesData

   }


  displayCountry = () =>{
let theList = [...this.state.countryList];
return theList.map(eachCountry => {
 
  return (<CountryList countryName={eachCountry.name.common} abbr={eachCountry.cca2} key={eachCountry.cca2}/>)
})
  }

  render(){

    return (
      <div className="App">
      <div className="navbar navbar-light headCountries">
      <h1>WikiCountries</h1>
      </div>
  <span className="containerList">
       <div className="list-group countryContainer">
      {this.displayCountry()}
      </div>
      </span>
      <Switch>
      <Route exatct path={`/:id`} render={(props) => <CountryDetails {...props} list={this.state.countryList} />} />
      </Switch>
  
      </div>
    );
  }
 
}

export default App;
