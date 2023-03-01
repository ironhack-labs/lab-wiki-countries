import { useState } from "react"
import { Link } from "react-router-dom"



const CountriesList = ({ countries }) => {


    const [countriesArr, setCountriesArr] = useState(countries)



    return (


        <div className="col-5">
            <div>

                {countriesArr.map(({ alpha3Code, alpha2Code, name: { official } }, i) => {
                    return (
                        <div className="cardCountries" key={i}>

                            <p>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flag" />
                            </p>
                            <p >
                                <Link className="listlink" to={alpha3Code}>{official} </Link>
                            </p>

                        </div>
                    )
                })}


                <Link to='{/alpha3Code}'> </Link>

            </div>

        </div>



    )
}

export default CountriesList