import React from "react";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import countries from "./countries.json";


class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
  }
  console.log("APP")
  render(){
    return(
      <div>
      <Navbar />
      <div>
         <CountriesList countries={this.state.countries} />
        <Route exact path="/:id" render={(props) => <CountryDetails {...props} countries={this.state.countries}/>} />
      </div>
       
      </div>
    )
  }
}

export default App;
