import './CountriesList.css'

import { Link } from "react-router-dom"

function CountriesList({ countries }) {

    return (

        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
                {countries.map((country, idx) => {
                    return (
                        <Link key={idx} to={"/" + country.alpha3Code}>
                            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="" />
                            <h3>{country.name.common}</h3>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default CountriesList