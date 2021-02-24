import countries from './../countries.json'
import './CountryDetails.css'

const CountryDetails = (props) =>{

const country = countries.filter((country)=>country.cca3 === props.match.params)

return (

<section className="details">
<h2>{country.name}</h2>
<hr></hr>
<p>Capital : {country.capital}</p>
<p>Area : {country.area}km²</p>
<p>Borders:{country.borders}</p>
</section>

)
}

export default CountryDetails