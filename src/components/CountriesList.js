
import CountryDetails from "./CountryDetails";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function CountriesList(props) {
    return (
        <div className="container d-flex">
            <div id='growth' className="col-md-4">


                {props.countries.map((country) => {
                    return (

                        <div key={country.name.official} className="card d-flex align-items-center p-3 " >
                            <img style={{ width: 50 }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <Link className="mt-3" to={`/${country.alpha3Code}`}><h3>{country.name.official}</h3></Link>
                        </div>

                    )
                })}

            </div>

            <div className='card col-md-8 pt-5' >
                <Routes>
                    <Route path="/:details" element={<CountryDetails countries={props.countries}  />} />
                </Routes>
                
            </div>
            

        </div>
    )
}

export default CountriesList;