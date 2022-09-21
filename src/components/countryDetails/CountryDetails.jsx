import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryData from '../../countries.json';
import { NavLink } from "react-router-dom";


const CountryDetails = () => {

    const [country, setCountry] = useState({}) // {}
    const { idCountry } = useParams() // abw

    useEffect(() => {
        const find = CountryData.find((country) => country.alpha3Code.toLowerCase() === idCountry);
        setCountry(find); // new value
    }, [idCountry]);

    return <div className="flag2">
        {country.alpha3Code ? <>
            <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} />
            <p>{country.alpha3Code}</p>
            <hr></hr>
            <p><span><b>Capital</b></span>: <span>{country.capital}</span></p>
            <p><span><b>Area</b></span>: <span>{country.area} km²</span></p>
            <div>
                <p><span><b>Borders</b></span>:</p>
                {country.borders.map((countryBorders) => {

                    return (
                        <div>

                            <NavLink to={`/${countryBorders.toLowerCase()}`}>{countryBorders}</NavLink>
                        </div>
                    );
                })}
            </div>
        </> : null}
    </div>;

}

export default CountryDetails;