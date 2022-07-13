import { useState } from "react"
import { Link } from "react-router-dom"

const CountriesList = ({ countriesJSON }) => {


    const [countriesList, setCountrieList] = useState(countriesJSON)


    return (
        <>
            <div className="col-5" style={{ textAling: 'center' , height: '80vh', overflow: 'scroll' }}>

                <div className="list-group">

                    {
                        countriesList.map(country => {
                            return (


                                <Link className="list-group-item list-group-item-action" to={`/country/${country.alpha3Code}`} key={country.alpha3Code}
                                >
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                                    <br />
                                    {country.name.common}
                                </Link>

                            )
                        })


                    }

                </div>
            </div>
        </>
    )
}

export default CountriesList