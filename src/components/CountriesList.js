import { Link } from "react-router-dom";

function CountriesList(props) {
    return(
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              {props.countriesToRender.map((country) => {
                return (
                    <div key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                );
              })}
            </div>
        </div>
    );
}

export default CountriesList;