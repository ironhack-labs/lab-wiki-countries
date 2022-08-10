import { useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

/* USO EL USELOCATION XQ VOY A JUGAR CON EL STATE DEL LINK */
/* nota, mira el ternario que estas usando esta vez.*/

function CountryDetails() {
  const params = useParams();
  const [detailCountry, setDetailCountry] = useState({});
  /* const location = useLocation() */
  /* console.log("params",params) */

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
      .then((response) => {
        console.log('el data', response.data);
        setDetailCountry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('el erro de axios', error);
      });
  }, [params.id]);

  console.log('el country details', detailCountry);

  return loading ? (
    <p>Estoy cargando, porfa espera! </p>
  ) : (
    <div className="col-7">
      <h1>{detailCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{/* {location.state.capital} */}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {detailCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {detailCountry.borders.map((border, idx) => {
                return (
                  <div>
                    <ul >
                      <li >
                        <Link key={idx} to={`/${border}`}  style={{ textDecoration: 'none' }}>
                          {border}
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
