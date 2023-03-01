import { NavLink } from "react-router-dom"

function Country({ filterCountry, name, alpha2Code, alpha3Code }) {
    const { common: countryName } = name

    return (
        <NavLink onClick={() => filterCountry(alpha3Code)} className='list-group-item list-group-item-action' to={`/${alpha3Code}`} >
            <img src={`https://flagpedia.net/data/flags/icon/20x15/${alpha2Code.toLowerCase()}.png`} alt={countryName} /> {countryName}
        </NavLink>
    );
}

export default Country;
