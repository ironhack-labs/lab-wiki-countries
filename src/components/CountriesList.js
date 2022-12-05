import { Link, useParams } from "react-router-dom";

function CountriesList(props) {
    const countriesCode = props.countriesList;
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-5">
            {countriesCode.map(country => {
                return (
                    <div key={country.alpha3Code} className="country-listed border p-2 mb-2">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                        />
                        <Link to={ country.alpha3Code }>
                            {country.name.common} 
                        </Link>
                    </div>
                )  
            })}
            </div> 
            </div> 
        </div>
    );  
};

export default CountriesList;