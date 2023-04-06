import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CountryDetails(props) {
  const { countryId } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    const result = props.detail.find(
      (element) => element.alpha3Code === countryId
    );
    setCountryDetail(result);
  }, [countryId]);

  const displayBorders = () => {
    if (countryDetail.borders.length > 0) {
      return (
        <ul>
          {countryDetail.borders.map((element, index) => {
            return (
              <li key={index}>
                <Link to={'/' + element}>{displaycoutryName(element)}</Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return;
    }
  };

  const displaycoutryName = (CountryCode) => {
    const result = props.detail.find(
      (element) => element.alpha3Code === CountryCode
    );
    return result.name.official
  };

  const displayDetails = () => {
    console.log('countryDetail 2.......', countryDetail);
    return (
      <div className="col-7">
        <h1>{countryDetail.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryDetail.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>{displayBorders()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return <>{countryDetail ? displayDetails() : <p>loading....</p>}</>;
}
export default CountryDetails;
