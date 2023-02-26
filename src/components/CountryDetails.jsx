import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CountryDetails(props){

    const {countryId} = useParams();
    const country = props.countries.find(country=>country._id === countryId)

    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" width="200px" height="auto" />
            <h1>{country.name.official}</h1>
            <div>
                <h3>Capital</h3>
                <p>{country.capital[0]}</p>
            </div>
            <div>
                <h3>Area</h3>
                <p>{country.area}</p>
            </div>
            <div>
                <h3>Borders</h3>
                {country.borders.map((border)=>{
                    const borderCountry = props.countries.find((country)=>country.alpha3Code === border)
                    return (<p key={borderCountry._id}><Link to={"/" + borderCountry._id}>{borderCountry.name.official}</Link></p>)
                })}
            </div>
        </div>
    )
}