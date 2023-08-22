
import { Link } from "react-router-dom";

function CountriesList({ countries }) {

    const divStyle = {
        maxHeight: "90vh",
        overflow: "scroll"
    };

    const image = {
        display: "block", 
        margin: "0 auto"
    };

    return (
        <div className="col-5" style={divStyle}>
            <div className="list-group">
            {countries.map((country) => {

                  return  ( 
                    <>  
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={image} st />
                    <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                </>
   ) })}
    </div>
</div>
);
}
export default CountriesList;