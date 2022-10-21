import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((response) => {
        
        setDetails(response.data);
      })
      .catch((e) => console.log('error getting countries from API', e));
  }, [alpha3Code]);

  return (
    <div className="col-6">
    <div className='list-group'>
      <h1>{details.name && details.name.common}</h1>
      <table className="table table-sm">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{details.capital && details.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area && details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
                  <td>Borders</td>
                  <td>
                  {details.borders && details.borders.map((border) => {
                    return(
                      <ul>
                      <li key={border}><Link to={`/${border}`}>{border}</Link></li>
                      </ul>
                    )
                  }) }
                  </td>
                </tr>
        </tbody>
      </table>

      <div></div>
    </div>
    </div>
  );
}

export default CountryDetails;
