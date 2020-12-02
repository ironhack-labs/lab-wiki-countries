import { Link } from 'react-router-dom'


const CountryLink = ({ name, flag, cca3 }) => {
    return (
        <Link className="list-group-item list-group-item-action" to={cca3} >{flag} {name.official}</Link>
    )
}
export default CountryLink