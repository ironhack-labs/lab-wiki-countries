import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { id } = useParams()

    const country = countries.find(elm => elm.alpha3Code === id)

    console.log(country.borders)


    return (
        <>
            <img key={country.apha2Code} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{country.name.common}</h1>
            <p> Capital:  {country.capital}</p>
            <p> Area: {country.area}km2</p>
            <p>
                {country.borders.map(elm =>

                    <Link to={elm}> <li key={elm} className="list"> {elm}</li></Link>)

                }
            </p>


            {/* <Link to={elm.alpha3Code}><p key={elm.alpha3Code}>{elm.alpha3Code}</p></Link> */}

        </>

    )
}
export default CountryDetails
