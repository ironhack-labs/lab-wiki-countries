import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  return (
    <>
      {props.countries.map((country) => {
        return (
          <div key={country._id}>
            <NavLink to={`/${country.alpha3Code}`}>
              {country.name.common}
            </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default CountriesList;
