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
    return (
      
    <div className="App">
    <div className = "row" >
    <div className = " col-5 list-group" > 
    
    
    {countries.map((item) => <CoutrieBox image={item.flag} name={item.name.common} cca3={item.cca3}/>)}
    
    
    </ div >
    <div className=" col-7 "> 
          <Switch>
            <Route exact path='/:cca3' component={CountryDetail}/>
          </Switch>
    
    </div>
    </div>
  
    </div>
      );
  }
}

export default App;
