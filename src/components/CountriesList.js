import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <section>
      {props.countries.map((country) => {
        return (
          <div className="country">
            <Link to={'/countries/' + country.alpha3Code}>
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default CountriesList;
