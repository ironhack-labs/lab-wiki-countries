import React from 'react';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    country: '',
    capital: '',
    area: '',
    borders: [],
  };

  addCountry = (props) => {
      this.setState({
          country: props.countries.name.common,
        capital: countries.capital,
        area: countries.area,
        borders: [countries.borders]
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.country}</h1>
        <hr />
        <div>
          <p>Capital</p>
          <span>
            <p>{this.addCountry}</p>
          </span>
        </div>
      </div>
    );
  }
}

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// function CountryDetails(props) {
//   return <h1>{props.match.params.username}!</h1>;
// }

// ReactDOM.render(
//   <Router>
//     <Route path="/user/:country" component={CountryDetails} />
//   </Router>);

export default CountryDetails;
