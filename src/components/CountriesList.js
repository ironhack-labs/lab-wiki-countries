import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    console.log(props)

    return (
    <div>
      {props.countries.map((country) => {
        return (
          <Link to={'/' + country.alpha3Code} key={country.name.common}>
            {country.name.common}
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
