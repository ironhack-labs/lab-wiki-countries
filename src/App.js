// // import React from 'react';
// // import logo from './logo.svg';
// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from "./components/Navbar"
// import CountriesList from "./components/CountriesList"
// import CountryDetails from "./components/CountryDetails"
// import axios from 'axios';



// class App extends Component {
//   state = {
//     countries: []
//   }

//   componentDidMount = async () => {
//     const countries = await axios.get("https://countries.tech-savvy.tech/countries")
//     this.setState({ countries: countries.data})
//   }
  
//   render(){
//     console.log("Current State is: ",this.state)
//     return (
//     <div className="App">
//       <Navbar/>
//       <div className="container">
//         <div className="row">
//           <CountriesList countries={this.state.countries}/>
//           <Switch>
//             <Route exact path="/:id" component={CountryDetails} countries={this.state.countries}/>
//           </Switch>
//         </div>
//       </div>
//     </div>
//   )};
// }

// export default App;
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import axios from "axios";
import "./App.css";
//import countries from "./countries.json";
class App extends Component {
  state = {
    countries: []
  };
  componentDidMount() {
    // console.log("did mount");
    axios
      .get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        // console.log("api response");
        this.setState({ countries: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  <CountriesList countries={this.state.countries} />
                </div>
              </div>
              <Switch>
                <Route exact path="/:cca3" render={props => (<CountryDetails {...props} countries={this.state.countries} />)}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;