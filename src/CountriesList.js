
import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {

    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                {countries.map(elm => <Link className="list-group-item list-group-item-action" to={elm.cca3}>{elm.cca2} {elm.name.common}</Link>)}
            </div>
        </div>

    )
}

export default CountriesList



