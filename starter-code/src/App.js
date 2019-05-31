import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
     <div className="App">
       <Header/>
       <div className='container'>
         <div className='row'>
           <div className="col-5" style={{'height': '90vh', overflow: 'scroll'}}>
             <CountrySearch countries = {countries}/>
             </div>
       
       <Switch>
         <Route exact path='/:id' component={CountryDetail}/>
       </Switch>
     </div>
   </div>
 </div>
)
}
}
export default App;
