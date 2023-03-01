import './CountryDetails.css'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    const country = countries.find(elm => elm.alpha3Code === id)


    console.log(country)
    return (
        <div className="CountryDetails">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <hr />
            <h5>{country.name.common}</h5>
            <hr />
            <p> Capital: {country.capital[0]}</p>
            <hr />
            <p>Area: {country.area}</p>
            <hr />
            <p>Borders:</p>
            {
                country.borders.map(elm => {
                    return <Link to={`/${elm}`} key={elm}> <p>{elm}</p></Link>
                })
            }


        </div>
    )
}

export default CountryDetails 