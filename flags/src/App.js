import React,{Component} from 'react';
import './App.css';
import countries from './countries.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from "./Components/Navbar"
import DetailCountry from './Components/DetailCountry'
import Country from './Components/Country'

import {Switch,Route} from 'react-router-dom'

class App extends Component {
      constructor(){
        super()
        this.state={
            copyCountries:[...countries]
        }
    }
  render(){
  return (
    <div className="App countainer">
      <Navbar/>
      
      <div className="row">
        <div className="col-4">
                      {this.state.copyCountries.map((props,idx)=>{
                return (
                    <Country key={idx} {...props}/>
                )
            })}
        </div>
        <div className="col-8">
        {/* <DetailCountry/> */}
          <Switch>
          <Route exact path="/:id" component={DetailCountry}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}
}

export default App;
