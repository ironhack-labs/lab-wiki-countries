import { useState, useEffect } from "react";

function CountryDetailsPage() {
    const [country, setCountry] = useState('');
    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(data => {
                setCountry(data.map((country) => {
                    const alpha3Code = country.alpha3Code.toLowerCase()
                    return <div key={country._id}>
                        <h1 >{country.name.common}</h1>
                        <p>Capital {country.capital} </p>
                        <p>Area {country.area} </p>
                        <p>Borders <ul>{country.borders.map((country, index) => <li><a href="" key={index}>{(country)}</a></li>)}</ul></p>

                    </div>
                }));
            })
    }, []);
    return (
        <div className="container">
            <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</h1>
            <div>{country}</div>

        </div>
    )
}

export default CountryDetailsPage