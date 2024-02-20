import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function HomePage() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
            console.log(response)
            setCountries(response.data);
            setFetching(false);
        })
        .catch(console.error);
      }, []);
    
    if (fetching) {
        return <p>Loading...</p>
    }
    
    return (
        <div className="container">
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {countries.map((c) => {
                    return (    
                    <Link key={c._id} className="list-group-item list-group-item-action" to={`/${c.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${c.alpha2Code.toLowerCase()}.png`} width={72} height={54} />
                        <h3>{c.name.common}</h3>
                        
                    </Link>

                    )
                })}
            </div>
          </div>
    )
}

export default HomePage;
