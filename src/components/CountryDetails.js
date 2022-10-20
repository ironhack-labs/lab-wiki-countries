import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log('error getting characters from API', e));
  }, []);

  return (
    <div className="col-12">
      <div className="list-group">
        <div>
          <div>Name: {details.name && details.name.common}</div>
          <div>Capital: {details.capital && details.capital[0]}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
