import countriesData from '../countries.json'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    const country = countriesData.find((oneCountry) => {
        return oneCountry.alpha3Code === countryId;
    })

    if (country) {
      setFoundCountry(country);
    }
      
  }, [countryId]);

  return (
    <div>
      <h1>Project Details</h1>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
    <div className="col-7">
    <h2 className='countryName'>{foundCountry.name.official}</h2>
    <table className="table">
    <tr className='capital'>
                  <td className='capitalTitle'>Capital</td>
                  <td className="list-group-item list-group-item-action">{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td className='areaTitle'>Area</td>
                  <td>
                    {foundCountry.area}
                    <sup>2</sup>
                  </td>
                  </tr>
                  <td className='bordersTitle'>Borders:</td> {foundCountry.borders.map(e => {
                    return (
                        <Link to={`/${e}`}><div>{e}</div></Link>
                    )
                })}
    </table>

    <Link to="/">Back to Countries List</Link>
  </div>
      )}
    </div>
  )
}

export default CountryDetails;