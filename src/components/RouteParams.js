import { Link } from "react-router-dom"
import countries from "../countries.json"

const RouteParams = props => {
    return (

        < div >
            <Link to={`${elm.cca3}`} >
                {elm.name.official}  </Link>

        </div>
    )
}
export defautl RouteParams