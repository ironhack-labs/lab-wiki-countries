import { Link } from "react-router-dom";

function Country ({flag, name, cca3}) {
    return (
        <li>
            <Link exact to={cca3}>
            {flag}
            {name.common}
            </Link>
        </li>
    )
}

export default Country;