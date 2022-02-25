import {Link} from "react-router-dom"

const CountriesList = ({countries}) => {

    return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
            {countries.map(country => 
                <div key={country.alpha3Code}>
                    <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>🇦🇼 {country.name.common}</Link>
                </div>
            )}
            

        </div>
    </div>
    )
}

export default CountriesList