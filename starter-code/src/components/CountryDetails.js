import React from "react"
import {Link} from "react-router-dom"
import countries from "../countries.json"

class CountryDetails extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cca3: this.props.match.params.CCA3,
      country: this.findCountry(this.props.match.params.CCA3),
    }
  }

  findCountry = (CCA3) =>{
    const totalCountries = countries.length
    for(let i = 0; i < totalCountries; i++){
      if(countries[i].cca3 == CCA3){
          return (countries[i]);
      }
    }
  }

  populateList = (arrayOfItems) =>{
    return arrayOfItems.map((eachItem) =>{
      return <li><Link to={`/${eachItem}`}>{eachItem}</Link></li>
    })
  }

  static getDerivedStateFromProps (props, state){
    if(state.cca3 != props.match.params.CCA3){
      const totalCountries = countries.length
      for (let i = 0; i < totalCountries; i++) {
        if (countries[i].cca3 == props.match.params.CCA3) {
          return ({country : countries[i]});
        }
      }
    }
    return null;
  }

  render(){
    return(
      <div className = "country-details">
        <h1>{this.state.country.name.common}</h1>
        <hr />
        <p>Capital {this.state.country.capital[0]}</p>
        <hr />
        <p>Area {this.state.country.area} km <sup>2</sup></p>
        <hr />
        <p>Borders</p>
        <ul>
          {this.populateList(this.state.country.borders)}
        </ul>
      </div>
    )
  }
}

export default CountryDetails;