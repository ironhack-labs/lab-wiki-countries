import React from 'react';
import DetailsCountry from './component/DetailsCountry';
import countries from './countries.json'

class WikiCol extends React.Component {
  
  render() {
    const country = countries.find(country => this.props.match.params.id === country.cca3)
    const borders = country.borders.map(border => {
      return {
        name: countries.find(country => country.cca3 === border).name.official,
        cca3: border
      }});
      
    return country.name
      ? <DetailsCountry country={country} borders={borders}/>
      : null
  }
};


export default WikiCol 