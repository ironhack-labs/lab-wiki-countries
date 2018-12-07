import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import CountryDetail from './CountryDetail';
import Data from './countries.json';


class App extends Component {
  state={
    data: Data
  
  }


  getAllTheCountries = ()=>{
    return(
    this.state.data.map((country, i)=>{
      // console.log(country.name.official)
      // console.log(country.cca3);
      return <Link to={'/country-code/'+country.cca3} key={i} className="list-group-item list-group-item-action w-50">{country.name.official}</Link>

      /* <div className="list-group-item list-group-item-action w-50 the-Url" activeClassName='active-page'>{country.cca3}</div></div> */
      
    })
    
    )
  }


  render() {
    
    return (
      <div className="App">
       {this.getAllTheCountries()}
       {/* <Link to="/country-code">
       <button className='btn-primary bg-primary'>Check out the CountryList</button>
       </Link> */}

        <Switch>
          <Route exact path='/country-code/:theURL' component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
