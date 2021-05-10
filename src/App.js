import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import CountriesList from './components/CountriesList';
import { Redirect, Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails';
import React from "react";
import data from "./countries.json"
import CountryService from "./services/countries.service";
import { Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: data,
    };
    this.countryService = new CountryService();
  }

  componentDidMount() {
    this.countryService
      .get()
      .then((response) => {
        console.log(response.data);
        this.setState({ countries: response.data });
      })
      .catch((err) => console.error(err));
  }
  displayCountries() {
    return (
      <div>
        {this.state.countries.map((country, index) => {
          return (
            <Link to={`/countries/${index}`}>
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        {this.displayCountries()}
        <Switch>
          <Route path="/countries/:id" component={CountryDetails} />
        </Switch>
        {/* React Router Route rendering the CountryDetails should go here */}
      </div>
    );
  }
}

export default App;
