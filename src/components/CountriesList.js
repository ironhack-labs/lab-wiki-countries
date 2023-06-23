import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    console.log("props", props);
    return (<div
        className="col-5"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
        >
        <div className="list-group">
        { props.countries.map(c => {
            return ( <Link className="list-group-item list-group-item-action" to={`/${c.alpha3Code}`} >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${c.alpha2Code.toLowerCase()}.png`} alt="" /> {c.alpha2Code} {`/${c.name.common}`}
            </Link>)
        })
}
        </div>
        </div>)
}