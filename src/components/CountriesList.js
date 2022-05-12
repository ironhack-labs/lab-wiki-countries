import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <ul>
      {props.countries.map((x) => {
        return (
          <li key={x._id}>
            <Link to={`/${x.alpha3Code}`}>{x.name.common}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesList;
