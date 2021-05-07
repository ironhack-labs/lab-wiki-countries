import React from "react";
import {Link} from "react-router-dom";
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

  render(){
    return(
      <div>
        <CountriesList countries={this.state.countries} />
        <Link exact path="/:id" render={{props}} />
      </div>
    )
  }
}

export default App;
