import React, {Component} from 'react';
import countries from '../countries.json';

export default class CountryBorderLink extends Component{
  constructor({cca3}){
    super();
    let name = countries.filter(e => e.cca3.includes(cca3))[0].name.official;
    this.state = {
      countryId: cca3,
      name
    }
  }

  

  render(){
    let {name, countryId} = this.state;
    
    return (
        <a href={`/${countryId}`} className="has-text-weight-light is-size-4 is-link is-block">
          {name}
        </a>
    )
  }
}