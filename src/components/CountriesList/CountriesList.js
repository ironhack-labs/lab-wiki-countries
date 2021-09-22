
import { Link } from 'react-router-dom';
import './CountriesList.css'

function CountriesList(props) {

    const {countries} = props

    return ( 
        <div className="countriesList">
            <div class="container">
                    <div className="col-5">
                        <div class="list-group">
                            {countries.map(country => {
                                return (<Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.name.common}</Link>)
                            })}
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default CountriesList;