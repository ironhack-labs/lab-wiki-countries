import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "./../../countries.json";

const CountriesList = () => {

    const [countriesList, setcountriesList] = useState(projectsData);

    useEffect(() => {
        setcountriesList(projectsData);
    }, []);

    return (
        <div>
            <ul>
                <h1>lista de Paises</h1>
                {countriesList.map((countries) => {

                    return (
                        <li key={countries.alpha3Code}>
                            <Link className="enlace" to={`/${countries.alpha3Code}`}>{countries.name.official}</Link>
                        </li>
                    )
                })}
            </ul>

        </div>


    )
}

export default CountriesList