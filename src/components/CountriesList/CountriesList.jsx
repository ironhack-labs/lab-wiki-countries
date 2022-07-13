import { useState } from "react";
// import axios from axios
import { Link } from "react-router-dom";



function CountriesList({ countriesData }) {

    const [countries, setCountries] = useState(countriesData);



    //     const apiUrl = ('https://ih-countries-api.herokuapp.com/countries')
    //     axios.get(apiUrl).then((response {
    //         setCountries(response.data)  no se como se hace jiji
    // })



    return (
        <div className="container">
            <div className="row">
                <h2>Countries</h2>

                <hr />
                {countries.map((country) => {
                    return (
                        <>

                            <div key={country.alpha3Code} className="project col-6">
                                <h3>{country.name.common}</h3>
                                <img href="URL DESTINO" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                                <Link className="navbar-brand" to={`/countries/${country.alpha3Code}`}>Country details</Link>
                            </div>
                            {/* <div className="col-3">

                                <h3>{country.capital}</h3>
                                <p>{country.area}</p>
                                <p>{country.borders}</p>

                            </div> */}

                        </>
                    );
                })}

            </div>
        </div >
    );
}


export default CountriesList; 