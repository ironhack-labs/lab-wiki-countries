import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const CountryDetails = ({ countries }) => {


    const { id } = useParams()

    const country = countries.find(elm => elm.alpha3Code === id)

    const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`

    return (


        <div className="col-7 details">
            <img src={flag} alt="flag" />
            <h1>{country.name.official}.</h1>
            <p>Capital: {country.capital}.</p>
            <p> Area: {country.area} kms.</p>
            <Link className="detailslink">{country.borders.map(elm => { return (<p>{elm}</p>) })} </Link>


        </div>
    )
}


export default CountryDetails
