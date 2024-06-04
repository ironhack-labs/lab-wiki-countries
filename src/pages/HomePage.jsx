import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [countries, setCountries] = useState([])

    const getCountries = async () => {

    try {
    const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
        
        console.log(response.data)
        setCountries(response.data)
    } catch (error) {
        console.log('error fetching countries');
    }
    }


    useEffect(() => {
        getCountries();

    }, [])

    return (
        <div className="container" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <h1 style={{fontSize: '24px'}}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
            {countries.map(country => {
                return (
                <Link key={country._id} className="list-group-item list-group-item-action" to={country.alpha3Code}><img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
                <p>{country.name.common}</p>
                {country.name.common}</Link >
            )

            })}
     </div>
      </div>

    )
}

export default HomePage;
