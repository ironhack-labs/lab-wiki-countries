import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


function CountriesList(props){
    const {countries, setCountries} = props
    const copyOfCountries = [...countries]
    const { countryId} = useParams()

    return (
        <div >
        {copyOfCountries.map((country)=>{
            return <div className="country-card">
            <img width={50} src={"https://flagsapi.com/" + country.alpha2Code +"/flat/64.png"}/>
            <Link value={country.alpha3Code} className="no-underline" to={`/${country.alpha3Code}`}> {country.name.common}</Link>
            </div>
        })} 

        </div>
    )
}

export default CountriesList    