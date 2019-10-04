import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./Components/Navbar";
import CountriesList from "./Components/CountriesList";
// import CountryDetails from "./Components/CountryDetails";
// import DetailsRedo from "./Components/DetailsRedo";
import { Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
// import axios from "axios";

class App extends Component {
  state = {
    allCountries: countries,
    // selectedCountry: {}
  };

  // componentDidMount() {
  //   axios.get("https://countries.tech-savvy.tech/countries").then(response => {
  //     console.log(response.data);
  //     this.setState({ allCountries: response.data });
  //   });
  // }

  // getCountry = cca3 => {
  //   const theCountry = oneCountry => {
  //     return oneCountry.cca3 === cca3;
  //   };
  //   let country = this.state.allCountries.find(theCountry);
  //   this.setState({
  //     selectedCountry: country,
  //   })
  // };

  getCountry = id => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    };
    let country = this.state.allCountries.find(theCountry);
    this.setState({
      selectedCountry: country
    })
  };

  // setCountry = () => {
  //   const { params } = props.match;
  //   const foundCountry = getCountry(params.cca3);
  //   // console.log(props, foundCountry, props.countries, params);
  // }

  // getBorders = x => {
  //   if (x.length === 0) {
  //     return <li>None</li>;
  //   } else
  //     return x.map((each, i) => {
  //       const country = getCountry(each);
  //       return (
  //         <li key={i}>
  //           <Link to={`/${each}`}>{country.name.common}</Link>
  //         </li>
  //       );
  //     });
  // };

  render() {
    // console.log(this.state.selectedCountry)
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.allCountries} />
            <Route
              exact
              path="/:cca3"
              component={props => (
                <CountryDetails
                  {...props}
                  countries={this.state.allCountries}
                  // country={this.state.selectedCountry}
                  getCountry={this.getCountry}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
