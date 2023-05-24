import './CountryDetails.css'
import { Link, useParams } from "react-router-dom";

const CountryDetails = ({ elements }) => {

    const { id } = useParams()
    const selectedCountry = elements.find(elm => elm.alpha3Code === id)
    const code = `https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`

    return (
        <>

            <img className='detailsImg' src={code} alt="" />
            <article>
                <h1>Name: {selectedCountry.name.common}</h1>
                <h1>Capital: {selectedCountry.capital}</h1>
                <div>
                    {
                        selectedCountry.borders.map((elm, index) => {
                            return (

                                <Link to={`/${elm}`} key={index}>
                                    <h4>{elm}</h4>
                                </Link>

                            )
                        })
                    }
                </div>
            </article >

        </>

    )
}

export default CountryDetails

