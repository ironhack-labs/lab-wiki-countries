import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function CountriesList({ countriesDat }) {

    const [countries, setProjects] = useState([]);

    useEffect(() => {
        setProjects(countriesDat);
    }, []);

    return (
        <div>
            <h2>Countries</h2>
            {countries.map((country) => {
                let url = "https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"

                return (
                    <div key={country.name.common} className="project">
                        <img src={url} />
                        <h3>{country.name.common}</h3>
                        <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;

