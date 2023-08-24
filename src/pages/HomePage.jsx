import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function HomePage() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries/').then((response)=>{
            setCountries(response.data);
            setFetching(false);
        });
    }, []);
    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="list-group d-inline-block w-75">
            {fetching && <p>Loading...</p>}
            {countries.map((country)=>{
                return(
                    <Link key={country._id} to={`/${country.alpha3Code}`} className='list-group-item list-group-item-action'>
                        <p><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width='20px'/>  {country.name.common}</p>
                    </Link>
                )
            })}
            </div>
        </div>
    );
};

export default HomePage;
