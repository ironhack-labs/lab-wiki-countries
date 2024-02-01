import { Link } from "react-router-dom";

const ListItem = ({ country }) => {
    return (
        <Link to={`/detail/${country.alpha3Code}`}>

            <div className="ListItem">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                <h5>{country.name.common}</h5>
            </div>
        </Link>
    )
}

export default ListItem;

