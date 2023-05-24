import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const CountriesList = ({ countries }) => {

    const [countriesDetails, setCountries] = useState([])
    useEffect(() => {
        setCountries(countries)
    }, [])

    return (
        <div className="container">{
            countriesDetails.map((elm, index) => {
                return (
                    <div className='row'>
                        <div className="col-5 countryList">
                            <div className="list-group " key={index}>
                                <Link to={elm.alpha3Code} className="list-group-item list-group-item-action">
                                    <p>{elm.name.common}</p>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )




}


export default CountriesList