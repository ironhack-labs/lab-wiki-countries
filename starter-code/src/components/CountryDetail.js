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

    return(
      
    <div style={{
      display:'flex',
      alignItems:'center',
      marginTop:'25%',
      flexDirection:'column',
      width: '40%',
      fontSize: '18px'
      }}> 
      
    {country.flag} 
    <p>Capital: {country.capital}</p>
    <p>Area: {country.area}KM2</p>
    

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

