import React , { Component }  from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import PageCountries from './Components/PageCountries';


class App extends Component {
  render(){
    return (
      
      <Router>
        <Route path="/:id" component={PageCountries}/>
      </Router>
    )
  }
  
}

export default App;