import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

function CountryDetails({ countriesData }) {
 
    const { id } = useParams();

    const [country, setCountry] = useState({});

    useEffect(() => {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
          .then(({ data }) => {
            console.log (data)
          setCountry(data);
        })
        .catch((err) => console.log(err));
    }, []);
    



//     countriesData = { countriesData }

//   const [detailedCountry] = countriesData.filter(
//     (country) => country.alpha3Code === id
//   );

  return (
    <div>
      <h1>Detalles of {country.name.common}</h1>
      <h3>{id}</h3>
    </div>
  );
}

export default CountryDetails;
