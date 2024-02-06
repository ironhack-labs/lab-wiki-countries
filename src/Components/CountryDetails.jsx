import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function CountryDetails(props) {
    const { alpha3code } = useParams();
    let foundCountry = props.countries.find((element) => 
      element.alpha3Code === alpha3code
      );
      console.log(foundCountry)

    return(
      <div>
  <h1>Country details</h1>
  <h2>{foundCountry.name.official}</h2>
  <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={`${foundCountry.alpha2Code} flag`} />
  <h4>Capital: {foundCountry.capital} </h4>
  <h4>Area {foundCountry.area} km²</h4>
  <h4>Borders {foundCountry.borders.map((country)=>(
  <Link to={`http://localhost:3000/${country}`}><p>{country}</p></Link>
  ))}</h4>


     
    </div>
    ) 
  }
  export default CountryDetails