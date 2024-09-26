import {Link} from "react-router-dom"
function CountriesList(props) {
   
    return(

        <div>
  
  {props.countries.map((country)=>
  <div key={country.alpha3Code}>
    <Link to={`/${country.alpha3Code}`}><p>{country.name.official}</p></Link>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.alpha2Code} flag`} />
    </div>
    )}
     
    </div>
    ) 
  }
  export default CountriesList;