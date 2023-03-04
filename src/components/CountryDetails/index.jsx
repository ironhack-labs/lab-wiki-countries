import { useParams, Link } from 'react-router-dom'
 //import './CountryDetails.css'

const CountryDetails = ({ countries }) => {
  const params = useParams();
  //const cntry = props.filter(country=>props.name.includes(params.countryId))
  //const cntrydtail = countries.filter(country=> country.alpha3Code.includes(params.countryId))
  const cntrydtail = countries.find(country => country.alpha3Code === params.countryId);
  const countryBorders = (border, countrs) => {
    let borderCountries = [];
    border.forEach((alpha3, index_alpha3) => {
      let borderCountry = countrs.find(country => country.alpha3Code === alpha3);
      borderCountries.push(borderCountry);
    });
    return borderCountries;
  };

  let borderCountry = countryBorders(cntrydtail.borders, countries);
  console.log(borderCountry);

  return (
    <div className='container-ctry-details'>
      <div>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${cntrydtail.alpha2Code.toLowerCase()}.png`} alt='Country' className='img-ctry-datails' />
        <h2 className='name-ctry-details'>{cntrydtail.name.official}</h2>
      </div>
      <div className='tabla-cntry-detail'>
        <table className='tabla-detail'>
          <tr>
            <th>Capital</th>
            <td>{cntrydtail.capital}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{cntrydtail.area} km²</td>
          </tr>
          <tr className='border-countries-table'>
            <th>Border</th>
            <td>
              {
                borderCountry.map(borderCountry => (
                  <ul>
                    <li>
                      <Link to={`/countryDetails/${borderCountry.alpha3Code}`} >{borderCountry.name.common}</Link>
                    </li>
                  </ul>
                ))
              }
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};


export default CountryDetails;