import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ allCountries }) => {
  const {id} = useParams();
  
  const  oneCountry = allCountries.filter((country) => country.cca3 === id)
  console.log(oneCountry)
  const currentCountry=oneCountry[0]
  
  return (
    <div>
       <div className="col-7" style={{ width: '110%', maxWidth: '300px' }}>
            <h1>{currentCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{currentCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {currentCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {currentCountry.borders.map((borde)=> {
const borderCountry = allCountries.filter((country)=> country.cca3 === borde)
return(
    <li key={borderCountry[0].cca3}>
    <Link to={`/countries/${borderCountry[0].cca3}`}>{borderCountry[0].flag} {borderCountry[0].name.common}</Link>
</li>
)}
                      )}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  );
};

export default CountryDetails;
