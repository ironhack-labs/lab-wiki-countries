import './countriesList.css'
import {Link} from 'react-router-dom'
const country = ({ name, flag, cioc , cca3}) => {
    if (cioc !== "") {
        return (
            <div className="card">
                <Link to={`/${cioc}`}>
                    <p className="flag">{flag}</p>
                    <p>{name}</p>
                </Link>
            </div>
        )
    }
    else {
        return (
            <div className="card">
                <Link to={`/${cca3}`}>
                    <p className="flag">{flag}</p>
                    <p>{name}</p>
                </Link>
            </div>
        )
    }
}
export default country