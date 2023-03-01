import './CountriesList.css'

import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {


    return (
        <div className="CountriesList">
            {
                countries.map(elm => {
                    return <div>
                        <Link to={elm.alpha3Code} key={elm.alpha3Code}> <p >{elm.alpha3Code}</p></Link>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="FLAG" />
                        <hr />
                    </div>

                })
            }
        </div>
    )
}

export default CountriesList