import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountryData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [alpha3Code]);

  if (countryData === null) {
    return <p>Cargando...</p>;
  }
  return (
    <div>
      <h2>{countryData.name}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Área: {countryData.area} km²</p>
      <p>Fronteras:</p>
      <ul>
        {countryData.borders.map(border => (
          <li key={border}>
            <Link to={`/countries/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CountryDetailsPage;
