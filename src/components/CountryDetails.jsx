import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  return (
    <div className="col-7">
      {country && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`${country.name.common} Flag`}
          />
          
          
          <table>
          <tbody>
        <tr>
            <td>{country.capital}</td>
            <td>{country.area} km</td>
        </tr>
    </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
