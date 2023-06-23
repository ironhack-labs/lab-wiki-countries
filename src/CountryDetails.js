import { useEffect, useState } from 'react';
import { useParams, Link, Router } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    Router.get(`/${id}`)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="col-7">
      <h1>{details.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>

            {/* <td>capital</td> */}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
