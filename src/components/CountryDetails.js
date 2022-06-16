import { useParams } from 'react-router-dom';

function CountryDetails({ list }) {
  const { alpha3Code } = useParams();
  function filterByA3Code(obj) {
    if (obj.alpha3Code === alpha3Code) {
      return true;
    }
    return false;
  }
  
  const findCountry = list.filter((element) => filterByA3Code(element));
  return (
    <div>
      <h1>{findCountry[0].name.common}</h1>
      <table>
      <tbody>
      <tr>
          <td>Capital</td>
          <td>{findCountry[0].capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{findCountry[0].area} km²</td>
        </tr>
        <tr>
          <td>Flag</td>
          <td><img src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry[0].alpha2Code.toLowerCase()}.png`} alt={findCountry[0].name.common} />{findCountry[0].alpha2Code}</td>
        </tr>
      </tbody>
        
      </table>
      

    </div>
  );
}

export default CountryDetails;
