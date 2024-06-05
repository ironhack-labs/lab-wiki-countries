import { useState, useEffect } from 'react'
import { getCountries } from '../services/Axios'
import { RingLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getCountries()
        .then((countriesApi) => setCountries(countriesApi))
        .catch(err => console.error(err))
        .finally(()  => setLoading(false))
    }, [])

    
    return(
        <div className='container' style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            {loading ? (
                <div className="d-flex justify-content-center mt-4">
                    <RingLoader />
                </div>
            ) : (
                <div className='countries'>
                    {countries.map(country => (
                        <Link
                            key={country.name.common}
                            to={`/country/${country.alpha3Code}`}
                            className="list-group-item list-group-item-action d-flex align-items-center"
                        >
                            <img src={`https://flagcdn.com/144x108/${country.alpha2Code.toLowerCase()}.png`} style={{ width: '30px', marginRight: '10px' }} />

                            {country.name.common}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
        
    
export default HomePage;
