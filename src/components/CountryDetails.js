import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const CountryDetails = (props) => {
  const { countryCode } = useParams();
  const countryDetails = props.countries.find((country) => {
    return country.alpha3Code == countryCode;
  });

  return (
    <div>
      <h1>{countryDetails.name.common}</h1>
      <h5>Capital : {countryDetails.capital} </h5>
      <h5>Region: {countryDetails.region}</h5>
      <h5>Area : {countryDetails.area} km²</h5>
      <ul>
        {countryDetails.borders.map((eachBorder) => {
          return (
            <li>
              <NavLink to={`/${eachBorder}`}>{eachBorder}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
