import { Link } from 'react-router-dom'

const CountriesList = ({cca3, flag, name}) => {
    return (
        <div>
            <Link to={`/${cca3}`} className="list-group-item list-group-item-action">{flag} {name.common}</Link>
        </div>

    )    
}

export default CountriesList