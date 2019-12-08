import React, {Component} from 'react';
import countries from '../countries.json';

export default class Detail extends Component {
  state = {
    country: {}
  }
  componentDidMount(){
    const country = countries.find(
      country => country.cca3 === this.props.match.params.cca3
    )
    this.setState({country})
    console.log(country);
  }
  render(){
    const {country} = this.state

    return(
      <div className="detailContainer">
        <p>Capital: {country.capital}</p>
				<p>Area: {country.area} km<sup>2</sup></p>
				<p> {country.flag}</p>
        <p>Borders:{country.borders} </p>
      </div>
    )
  }
}