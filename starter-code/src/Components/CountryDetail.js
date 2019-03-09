import React from "react";
import countries from "../countries.json";

const CountryDetail = (props) => {
  /* version simplifiée
  const cca3 = props.match.params.cca3;
  const foundCountry = (countries.find((c) => c.cca3 === cca3))
  */
  
  /*Version vue en cours*/
  console.log(props)

  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry)
  };
  const { params } = props.match;
  const foundCountry = getCountry(params.cca3);
  

  return (
    <div>
      <h1>{foundCountry.name.official}</h1>
      <div><p>Capital :</p>{foundCountry.capital}</div>
      <div><p>Area :</p>{foundCountry.area}</div>
      <div><p>Borders :</p>{foundCountry.borders}</div>
    </div>
  )
}

/* version component
class CountryDetail extends Component {
  render() {
    console.log(this)
    let country = countries.map((country) => {
      if (this.props.match.params.cca3 === country.cca3) {
        return (
          <div key={country.cca3}>
          <h1>{country.name.official}</h1>
          <div><p>Capital :</p>{country.capital}</div>
          <div><p>Area :</p>{country.area}</div>
          <div><p>Borders :</p>{country.borders}</div>
          </div>
        )
      }
    })
    return(
      <div className="CountryDetail">
        {country}
      </div>
    );
  }
}
*/

export default CountryDetail;