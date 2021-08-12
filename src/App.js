import { Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from './Pages/Home'
import Countries from './Pages/Countries'
import Country from './Pages/Country'
import NotFound from './Pages/NotFound'
import axios from 'axios'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    console.log("----------------In component did mount------------------ ");
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
        </header>
  
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries"  >
              <Countries countries={this.state.countries}/>
            </Route>
            <Route exact path="/country/:id">
              <Country countries={this.state.countries} />
            </Route> 
            <Route component={NotFound} />
          </Switch>
        </main>
  
      </div>
    )
  }
}

export default App;
