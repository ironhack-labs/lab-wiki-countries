import React from 'react';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      countries: [],
    };
  }
  getCountriesData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ countries: data });
      });
  };

  render() {
    const { countries } = this.state;
    return (
      <div>
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <div className="container">
                <div className="row">
                  <div
                    className="col-5"
                    style={{ maxHeight: '90vh', overflow: 'scroll' }}
                  >
                    <div className="list-group"></div>

                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/countries/${country.alpha3Code}`}
                    >
                      <img width="200px" src={country.flag} alt="flag" />
                      <h3>{country.name}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.getCountriesData();
  }
}

export default CountriesList;
