// import countriesData from '../../countries.json'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './CountryDetails.css'

function CountryDetails() {

    const [countriesDetails, setCountriesDetails] = useState([])

    const { country_alphaCode } = useParams()

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${country_alphaCode}`)
            .then(res => res.json())
            .then(countriesData => {
                console.log({ countriesData })
                setCountriesDetails([countriesData])
            })
    }, [country_alphaCode])


    // const foundCounty = countriesDetails?.find(elem => elem.alpha3Code === country_alphaCode)

    return (
        < >
            {countriesDetails[0] &&
                <div >
                    <img className='my-3' src={`https://flagpedia.net/data/flags/icon/72x54/${countriesDetails[0]?.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                    <h1>{countriesDetails[0]?.name.official}</h1>
                    <hr />
                    <p><span className='fw-bold'>Continet:</span> {countriesDetails[0].region}</p>
                    <p><span className='fw-bold'>Capital:</span> {countriesDetails[0].capital}</p>
                    <p><span className='fw-bold'>Languages:</span> {Object.values(countriesDetails[0].languages).map(elem => {
                        return <span key={elem}>{elem} | </span>
                    })}</p>
                    <p><span className='fw-bold'>Borders:</span> {countriesDetails[0].borders.map(elem => {
                        return <span key={elem}><Link to={`/countries/${elem}`}>{elem}</Link> | </span>
                    })}</p>
                </div>
            }

            <hr />
            <Link className='btn btn-dark' to="/countries">Back to Countries List</Link>
        </>
    )
}

export default CountryDetails