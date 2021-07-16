import React from "react";
import axios from "axios";

class CountryDetail extends React.Component {
  state = {
    name:"",
    capital:"",
    area:"",
    borders: [],
  };

  getCountry = async () => {
    const countryId = this.props.match.params.countryId;
    const country = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${countryId}`
    );
    this.setState({
      name: country.data.name,
      capital: country.data.capital,
      area: country.data.area,
      borders: country.data.borders,
    });
  };

  async componentDidMount() {
    this.getCountry();
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps !== this.props) {
      this.getCountry();
    }
  }

  render() {
    const { name, capital, area, borders } = this.state;
    return (
      <>
        <h3>{name}</h3>
        <h4>Capital: {capital}</h4>
        <h4>Area: {area}</h4>
        <h4>Borders:</h4>
        <ul>
          {borders.map((border) => {
            return <li>{border}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default CountryDetail;
