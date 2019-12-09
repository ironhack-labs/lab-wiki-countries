import React, {Component} from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
export default class CountryDetail extends Component {
    state = {
        country: {}
    }
  componentDidMount() {
    const country = countries.find(
        country => country.cca3 === this.props.match.params.cca3
    )
      this.setState({ country })
    }
  render() {
      const { country } = this.state
    //   const {name} = country;
    //   console.log(name.official)
    return(
    <div style={{
      display:'flex',
      alignItems:'center',
      marginTop:'25%',
      flexDirection:'column',
      width: '40%',
      fontSize: '18px'
      }}>
      
    <h5>Capital: {country.capital}</h5>
    <h5>Area: {country.area}KM2</h5>
    <ul>
      {
        (country && country.borders) ?
          country.borders.map ((country, i) => (
            <Link key = { i } to={`/country/${country}`}>
              <li>{(countries.find(
                elem => elem.cca3 === country
              )).name.official }</li>
            </Link>
        )) :
        ''
      }
      </ul>
    </div>
    )
  }
}//class