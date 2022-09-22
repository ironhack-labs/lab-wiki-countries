import './CountriesList.css';
import { Link } from "react-router-dom"
import countries from "../../countries.json"

const CountriesList = () => {

    // console.log('AQUI ESTÁN LOS PAISES', countries)
    const style = {
        // width: "30px"
    }
    return (
        <div>

            {countries.map(country => {
                return (
                    <div className="Container" key={country.name.common}>

                        <Link to={`/${country.alpha3Code}`}>
                            <img style={style} src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} alt="alternative-image" />
                            <h4>{country.name.common}</h4>
                        </Link>
                    </div>
                    // <p key={country.name.common}><strong>Country:</strong>  {country.name.common}</p>
                )
            })}
            <h1>Soy CountriesList</h1>
        </div>
    )
}

export default CountriesList