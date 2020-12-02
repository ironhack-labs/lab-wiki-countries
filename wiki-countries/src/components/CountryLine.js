import { Link } from 'react-router-dom'

const CountryLine = ({name, image, cca3}) => {
    return (
        <Link className="list-group-item list-group-item-action" to={`/${cca3}`}> {image} {name}</Link>
    )
}

export default CountryLine