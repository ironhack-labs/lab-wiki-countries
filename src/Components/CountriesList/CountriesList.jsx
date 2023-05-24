import { Link } from "react-router-dom";

function CountriesList({ countries }) {

    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group text-center">
                {countries.map(elm => {
                    return (
                        <Link className="list-group-item list-group-item-action d-flex flex-column align-items-center"
                            name={elm.alpha2Code} key={elm.alpha3Code} to={`/${elm.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} width="10%" alt="flag" />
                            {`${elm.alpha2Code} ${elm.name.common}`}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList;