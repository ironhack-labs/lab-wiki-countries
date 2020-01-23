import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import {Route, Switch} from 'react-router-dom';
import CoutrieBox from './Components/CoutrieBox'
import CountryDetail from './Components/CountryDetail';



class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
    
    
    }
    
  }
  
  render()  {
    const {name, capital, area, borders} = countries
    // console.log(countries[0].cca3)
    console.log(capital)    
      return (
        <div className="App">
          <div className='list-group'>

          {countries.map((item) => <CoutrieBox image={item.flag} name={item.name.common} cca3={item.cca3}/>)}

          </div>
          <CountryDetail/>
          <Switch>
            <Route exact path='/:cca3' Component='CountryDetail'/>
          </Switch>


    
        </div>
      );
  }
}

export default App;
