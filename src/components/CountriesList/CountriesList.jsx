import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"



function CountriesList() {
    const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     setCountries(countriesData);
    // }, []);


    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(({ data }) => {
                setCountries(data);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2>Countries</h2>
                {countries.map((elm, idx) => {
                    return (
                        <div key={idx}  className="col-8">
                            <div >
                                <Link to={`/${elm.alpha3Code}`} className="list-group-item list-group-item-action"
                                >{elm.name.common}</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CountriesList;


