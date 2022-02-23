
import { Link } from 'react-router-dom'

function Countries({ countries }) {
    

    return (
        <div className="container">
            <div className="row">
            {countries.map(country => {
                return (<div className="col-5"  >
                        <div className="list-group" key={country.name.common}>
                            <Link to={`/countries-list/${country.alpha3Code}`}>Ir al país </Link>
                            <p>{country.name.common}</p>

                        </div>
                        </div>
             ) })}
                
            </div>
        </div >
    )
}

export default Countries