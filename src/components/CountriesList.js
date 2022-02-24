import { Link } from "react-router-dom";


function CountriesList (props) {
    const { countries } = props;
    
    return (
        <div className="container">
         <div className="row">
            <div className="col-5" style="max-height: 90vh; overflow: scroll">
             <div className="list-group">
                {countries.map(country => {
                return <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">{country.name}</Link>
                })}
             </div>
            </div>
         </div>
        </div>
    )
}

export default CountriesList;