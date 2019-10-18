import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import { Route } from 'react-router-dom';
import Main from "./components/main";
import Detail from "../src/components/detail";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
          countries: []
      }
  }

  componentDidMount(){
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response => {
      this.setState({
        countries: response.data
      })
    })
  }

  render(){
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
        </div>
      
      <div className="App d-flex">
        <Route path="/" render={(props)=> <Main {...props} countries={this.state.countries}/>}></Route>
        <Route path="/detail/:code" render={(props)=> <Detail {...props} countries={this.state.countries}/>} ></Route>
      </div>
      </div>
    )
  }
}

export default App;
