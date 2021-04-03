import { Link } from 'react-router-dom'
import './CountriesList.css'

const CountriesList = ({alpha3Code, flag, name}) => {
    return (
        <div>
            <Link to={`/${alpha3Code}`} className="list-group-item list-group-item-action"><img src={flag} alt="flag" className="flag"></img> {name}</Link>
        </div>

    )    
}

export default CountriesList