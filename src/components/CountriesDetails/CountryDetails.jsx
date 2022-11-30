import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { country_id } = useParams()

    const foundCountry = countries.find(country => country.alpha3Code === country_id)

    let borders = foundCountry.borders.map((border => <Link to={`/${border}`}> {border} </Link>))







    return (
        <div className='container'>
            <h2 className='mt-3'>Countries Details</h2>
            <div className="card" key={country_id}>
                <div className="card-body">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt='FLAG' />
                    <h5 className="card-title">{foundCountry.name.official}</h5>
                    {borders}
                    <h6 className="card-subtitle mb-2">{foundCountry.capital[0]}</h6>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default CountryDetails

//name
//area
//borders