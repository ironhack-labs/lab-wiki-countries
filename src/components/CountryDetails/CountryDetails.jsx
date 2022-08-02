import { useParams, useLocation } from 'react-router-dom'; //nos regresa los parametros en la url
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = () => {
  const [detailCountry, setDetailCountry] = useState({});
  const [loading, setLoading] = useState(true);
  // 1. inicializamos useParamos
  const params = useParams();
  // const location = useLocation()
  // console.log('que son los params', params);
  // console.log('que son los location', location)
  useEffect(() => {
    axios
      .get(` https://ih-countries-api.herokuapp.com/countries/${params.id}`)
      .then((res) => {
        setDetailCountry(res.data);
        setLoading(false);
      })
      .catch((e) => console.log('el error', e));
  }, [params.id]); // el arreglo vacio solo para ejecutarse una vez: [vacio]
  // console.log('el country detail: ', detailCountry);
  return loading ? (
    <p>Estoy cargando porfa espera!! </p>
  ) : (
    <div className="col-7">
      <h1>{detailCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Paris</td>
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
              <ul>
                {detailCountry.borders.map((border, index) => {
                return (
                  <li key={index} > {border} </li>
                )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
