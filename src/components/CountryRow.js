import { Link } from 'react-router-dom'
import './CountryRow.css'

const CountryRow = ({ image, name, id}) => {

    return (
        <Link to={'/' + id}>
            {image}
            <span>{name}</span>
            <hr></hr>
        </Link>
    )
}

export default CountryRow