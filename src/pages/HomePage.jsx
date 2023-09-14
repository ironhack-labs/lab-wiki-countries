import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function HomePage() {
    const baseURL = "https://ih-countries-api.herokuapp.com/countries";
    const [country, setCountry] = useState(null);
    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                console.log(response);
                setCountry(response.data);
            })
            .catch((e) => {
                "error appeared", e;
            });
    }, []);
    const renderList = () => {
        if (country === null) {
            return <p>Loading...</p>;
        }
        return country.map((e) => {
            return (
                <NavLink to={e.alpha3Code} key={e.id}>
                    <br />
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
                    />
                    <br />
                    <br />
                    <p>{e.name.common}</p>
                    <hr />
                </NavLink>
            );
        });
    };
    return <>{renderList()}</>;
}

export default HomePage;
