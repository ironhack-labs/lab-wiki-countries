import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './Routes'
import Axios from 'axios'
import {Link,NavLink} from 'react-router-dom'


class App extends Component {
  state = {
    countries: []

  };

  componentDidMount(){
    Axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(res=>{
          const countries = res.data
          this.setState({countries})
        
      })
    
  }


  render() {
    return (
    <div id="root">

    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
    <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
           { this.state.countries.map((country,index) => {
             return <NavLink className="list-group-item list-group-item-action" to={`/${country.cca3}`}> {country.flag} {country.name.official} </NavLink>
            }) }
            </div>
          </div>
          
          <Routes/> 

        </div>
      </div>
    </div>
  </div>

    );
  }
}

export default App;
