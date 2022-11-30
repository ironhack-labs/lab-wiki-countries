import { useState, useEffect } from "react"
// import countriesData from "../../countries.json";
import { Link, useParams } from "react-router-dom"


const CountryDetails = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(' https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))

    }, [])


    const { id } = useParams()
    const foundCountry = countries?.find(elm => elm.alpha3Code === id)


    return (

        <section className="details">
            <h1> {foundCountry?.name.official}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry?.alpha2Code.toLowerCase()}.png`} alt='' />
            <hr />
            <div >
                <h1>  Fronteras</h1>
                {foundCountry?.borders.map((nercountry, index) => {
                    return (
                        <h5 key={index} >
                            <Link to={`/${nercountry}`}>{nercountry}</Link>
                            <br></br>
                        </h5>
                    )
                })}
            </div>
        </section>
    )
}

export default CountryDetails