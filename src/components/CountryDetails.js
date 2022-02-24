import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function CountryDetails(props) {

  const [country, setCountry] = useState(undefined);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((result) => {
        setCountry(result.data);
      })
      .catch();
  }, [country]);

  return (
    <div className="CountryDetails">
      <p>{props.capital}</p>
      <p>{props.area}</p>
      <ul>
        {props.borders?.map((elm) => {
          return <li>{elm}</li>;
        })}
      </ul>
    </div>
  );
}
