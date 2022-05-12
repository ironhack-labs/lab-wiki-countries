import { Link } from "react-router-dom"
import './CountriesList.css'


function CountriesList({ countries, fetching }) {

    return (

        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {fetching ? <h1>Loading</h1> : countries.map((country, idx) => {
                    return (
                            <Link key={idx} className="list-group-item list-group-item-action countryButton" to={"/" + country.alpha3Code}>
                                <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code?.toLowerCase() + ".png"} alt="" />
                                <h3>{country.name.common}</h3>
                                </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default CountriesList;