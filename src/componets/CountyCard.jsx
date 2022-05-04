import { Link } from "react-router-dom"


const CountryCard = ({ name, alpha3Code }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" >
                    <div className="list-group">
                        <Link to={`/${alpha3Code}`} className="list-group-item list-group-item-action">{name.official}</Link>
                    </div>
                </div>
            </div>
        </div >)
}

export default CountryCard
