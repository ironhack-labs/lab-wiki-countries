import { Route, Routes, NavLink, Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <>
      {props.listOfCountries.map((element, index) => (
        <Link key={"country links" + index} to={`/${element.alpha3Code}`}>
          {element.name}
        </Link>
      ))}
    </>
  );
}

export default CountriesList;