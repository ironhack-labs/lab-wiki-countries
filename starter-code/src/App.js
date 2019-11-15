import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countryData from './countries.json'
import CountryDetail from './CountryDetail'
import {Link, Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data: countryData,
      currentCountry: '',
      countryShowing: false,
   
    }
  } 



getCountryList = () => {
  return this.state.data.map((item, i)=>(
 
    <li key = {item.cca3} className='listItems' >
      <Link to={`/country/${item.cca3}`} className='eachCountry' > {item.flag}   {item.name.common}</Link>
    </li>))
   
}

  
render(){
  return (
    <div>
    
    <nav>
    <div className='navList'>
    {this.getCountryList()}
    </div>
    </nav>
    <div className='wikiCountries'> 
    <h1 className='heading'>WikiCountries</h1>
    </div>
<section>

      <Switch>


      <Route exact path="/country/:id" component={(props) => <CountryDetail {...props} countries={countryData}
      
        /> } />
      </Switch>

</section>




    

    </div>
  );
  }
}

export default App;
