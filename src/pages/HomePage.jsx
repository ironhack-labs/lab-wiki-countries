
import { Link } from "react-router-dom";

//const countriesAPI = "https://ih-countries-api.herokuapp.com/countries";

function HomePage({country}) {
  /*const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(countriesAPI).then((response) => {
      const countries = response.data;
      setCountries(countries);
      console.log(countries);
    });
  }, []);*/

  //const flag = `https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code}.png`

  return (
    <div>
      <h2>WikiCountries: Your Guide to the World</h2>
      <ul>
        {country.map((country) => {
          return (
            <li className="countries-list" key={country._id}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
