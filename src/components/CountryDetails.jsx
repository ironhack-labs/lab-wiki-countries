import { useParams } from 'react-router-dom';
// import countries from '../countries.json';
import Links from './Link';


export default function CountryDetails({countries}) {
  const { id } = useParams();
  const country = countries.filter((a) => a.alpha3Code === id)[0];
  const { name, capital, area, borders } = country;
  const countriesBorders = countries.filter((c) => {
    for (let i = 0; i < borders.length; i++) {
      if (c.alpha3Code === borders[i]) {
        return true;
      }
    }
    return null;
  });

  return (
    <div className="col-7">
      <h1>{name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li className="list-group">
                  {countriesBorders.map((c) => (
                    <Links key={c.alpha3Code} {...c} />
                  ))}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
