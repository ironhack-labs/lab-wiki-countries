import { Link, Route } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <>
      <ul>
        {props.countries.map((e, id) => {
          return (
            <li>
              <Link to={`/countries/${e.name}`}>
                <img
                  src={`https://www.countryflags.io/${e.alpha2Code.toLowerCase()}/flat/64.png`}
                />
                {e.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
