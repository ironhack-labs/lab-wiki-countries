import { Routes, Route, Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountriesList({countries}) {
    console.log(countries[0]);
    return (
        <div className="container">

            <div className="row">
                
                {/* <div className="col-5" style={maxHeight: "90vh", overflow: "scroll"}> */}
                <div className="col-5">
                    <div className="list-group">
                        {countries.map((country) => {
                            console.log(country.alpha3Code);
                            return (<a className="list-group-item list-group-item-action" href={country.alpha3Code}>🇦🇼 {country.name.official}</a>)
                        })}
                        

                        
                    </div>
                </div>
                <CountryDetails country={country}/>

                
            </div>
        </div>
    );
}

export default CountriesList;