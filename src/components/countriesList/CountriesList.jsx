import { NavLink } from "react-router-dom";
import CountryData from '../../countries.json';

const CountriesList = () => {

    return (

        <>

            {CountryData.map((country) => {
                const flag = country.alpha2Code.toLowerCase()
                const identify = country.alpha3Code.toLowerCase()
                return (
                    <div className="flag" key={country.alpha3Code}>
                        <img src={`https://flagpedia.net/data/flags/w702/${flag}.webp`} />
                        <NavLink to={`/${identify}`}>{country.name.common}</NavLink>
                    </div>

                );
            })}
        </>

    )

}

export default CountriesList;