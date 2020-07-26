import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`https://restcountries.eu/rest/v2`);
      this.setState({
        countries: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  listCountries() {
    return this.state.countries.map((country) => (
      <Row key={country.alpha3Code} style={{border: '1px solid lightgrey', padding: '15px 0 15px 15px', margin: "0"}}>
          <Link
            to={{
              pathname: `/${country.alpha3Code}`,
              state: country.alpha3Code,
            }}
            key={country.alpha3Code} >
            <img
              style={{
                width: '16px',
                height: 'auto',
              }}
              src={country.flag}
              alt="Country Flag"
            />
            {country.name}
          </Link>
      </Row>
    ));
  }
  render() {
    return <Col style={{height: "50vh", overflowY: "scroll"}}>{this.listCountries()}</Col>;
  }
}

export default CountriesList;
