import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HomePage() {
    const [country, setCountry] = useState('');
    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(data => {
                setCountry(data.map((country) => {
                    const alpha3Code = country.alpha3Code.toLowerCase()
                    return <div key={country._id}>
                        <p >{country.name.common}</p>
                    </div>
                }));
            })
    }, []);

    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }} >WikiCountries: Your Guide to the World</h1>
            {/* <Link to={`/${country.name}`}> */}
            <h1>{country.name}</h1>
            {/*  </Link> */}

        </div>

    )
}

export default HomePage