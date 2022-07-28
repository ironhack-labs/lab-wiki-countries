import { NavLink } from 'react-router-dom';


function CountriesList(props) {
    return (
        <ul>
            {props.countries.map(element => {
                return (
                    <li key={element.alpha3Code}>
                    <NavLink to={`/countries/${element.alpha3Code}`}>{element.name.official}</NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default CountriesList;