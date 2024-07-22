import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function CountryDetailsPage() {

    const { countryId } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(
                    `https://ih-countries-api.herokuapp.com/countries/${countryId}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setCountry(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the country data:", error);
                setLoading(false);
            }
        };

        fetchCountry();
    }, [countryId]);

    if (loading) {
        return (<p>Loading country details...</p>);
    }
    

  return (
    <>
          <div className="container">
      <h1 className="mt-5">{country.name.common}</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`Flag of ${country.name.common}`}
        className="my-3"
        style={{ width: '150px', height: 'auto' }}
      />
      <p><strong>Capital:</strong> {country.capital[0]}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>

      <h2>Bordering Countries</h2>
      <ul className="list-group mt-3">
        {country.borders.length > 0 ? (
          country.borders.map(borderCode => (
            <li key={borderCode} className="list-group-item">
              <NavLink 
                to={`/${borderCode}`} 
                className="text-decoration-none text-dark"
                activeClassName="active"  
              >
                {borderCode}
              </NavLink>
            </li>
          ))
        ) : (
          <li className="list-group-item">No bordering countries</li>
        )}
      </ul>
    </div>
    </>
  )
}

export default CountryDetailsPage
