import {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



function HomePage() {

    const [fetching, setFetching] = useState(true)
    const [countries, setCountries] = useState([])


    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries').then((response)=>{
            setCountries(response.data);
            setFetching(false);
        })

    },[])


    return (
      <div >
          <h2>WikiCountries: Your Guide to the World</h2>
          
          {fetching && <p>Loading...</p>}
          <ul>
        {countries.map(country => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} Flag`}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>

      </div>
    )
  }

export default HomePage;
