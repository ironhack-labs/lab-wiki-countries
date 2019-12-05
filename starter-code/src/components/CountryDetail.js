import React, {Component} from 'react';
import countries from '../countries.json';

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
    <p>Borders: {country.borders} </p>
     
    </div>
    ) 
  }
}//class

