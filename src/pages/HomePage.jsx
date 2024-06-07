import {ClimbingBoxLoader} from "react-spinners"
import { useEffect, useState } from "react"
import { getCountries } from "../services/CountriesService"
import { Link } from "react-router-dom"



function HomePage() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getCountries()
      .then((countries) => {
        console.log(countries)
        setCountries(countries)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
    }, [])






    return (
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <ClimbingBoxLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="list-group">
            {countries.map((country) => (
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
                key={country._id}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  width={24}
                  alt={country.name.common}
                /> {country.name.common}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  
export default HomePage;
