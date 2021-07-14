import { Link } from 'react-router-dom'

const CountriesBox = ({ name, cca2, cca3 }) => {


    return (
        <Link className="list-group-item list-group-item-action" to={cca3}>{cca2} {name.common}</Link>
    )
}

export default CountriesBox