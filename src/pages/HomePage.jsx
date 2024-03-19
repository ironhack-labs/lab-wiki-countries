
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
  const myStyle = {maxHeight: "90vh",overFlow: "scroll"};
  return (
    

    <div className="container" style={ myStyle }>
      <h2>WikiCountries: Your Guide to the World</h2>
      <div className="list-group">
      <ul >
        {country.map((country) => {
          return (
            <li class="list-group-item list-group-item-action" key={country._id}>
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
    </div>
  );
}

export default HomePage;
