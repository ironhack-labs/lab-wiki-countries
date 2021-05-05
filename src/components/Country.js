import "./Country.css"
import { Link } from "react-router-dom"

const Country = props => {
    return (
        <Link to={`/${props.cca3}`} className="list-group-item list-group-item-action">
            {props.flag} {props.name}
        </Link>
    )
}

export default Country