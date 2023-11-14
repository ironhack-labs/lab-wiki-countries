import axios from "axios";
import { useParams } from "react-router-dom";

function CountryDetails(props) {

    axios.get("https://ih-countries-api.herokuapp.com/countries/:alpha3Code")


  return (
    <>
      <h1>Details of country</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`}/>
      <h1>{props.country.name.common}</h1>
        <h2>Capital: {props.country.capital}</h2>
        <h2>Area: {props.country.area}m2</h2>
        <h2>Borders:</h2>                
  </>
  );
}
export default CountryDetails;
