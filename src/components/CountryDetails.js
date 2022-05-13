import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { alpha3Code } = useParams();
  const [detailsOfCountry, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/${alpha3Code}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log('error getting country Details from API', e));
  }, [alpha3Code]);

  return (
    <div key={detailsOfCountry.id} className="col-7">
      <h2>Country Details</h2>
      <h3>{detailsOfCountry.name.common}</h3>
      <h4>{detailsOfCountry.capital}</h4>
      <h4>{detailsOfCountry.area}</h4>
      <h4>{detailsOfCountry.borders}</h4>
    </div>
  );
}
export default CountryDetails;
