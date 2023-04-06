import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CountryDetails(props) {
  const apiURL = 'https://ih-countries-api.herokuapp.com';

  const { countryId } = useParams();
    console.log("countryId",countryId)
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log("response", response)
        setCountries(response.data);
      })
      .catch((e) => {
        console.log('error getting character details from API...', e);
      });
  }, [countryId]);

  const renderBorderList = () => {
    if (!props.countries.borders) {
      return <p>No borders</p>;
    }
    return props.countries.borders.map((borderCountry) => (
      <section key={borderCountry} className="box">
        <Link to={`/${borderCountry}`}>{borderCountry}</Link>
      </section>
    ));
  };

  const renderDetails = (countries) => {
    return (
      <div className="box">
        <h1>{props.countries.name.common}</h1>
        <p>Capital: {props.countries.capital}</p>
        <p>Area: {props.countries.area} km</p>
        <p>Borders:</p>
        {renderBorderList()}
      </div>
    );
  };

  return <>{props.countries.name ? renderDetails() : <p>loading....</p>}</>;
}
