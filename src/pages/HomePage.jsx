import { useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function HomePage() {

    // Store in the State a List of Apartments
    const [countries, setCountries] = useState(['']);
    // Store in the State the information of wether the component is fetching data from the API or not
    const [loading, setLoading] = useState(true)

    const apiUrl = "https://ih-countries-api.herokuapp.com/countries"

    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setCountries(response.data);
            setLoading(false);
        })
    }, []);

    return(
        <div className="container" style={{maxHeight: "90vh", overflow: scroll}}>
                <h1>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {loading && <p>Loading</p>}
                {!loading && countries.map((country)=> {
                    return(
                    <div key={country._id}>
                        <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <p>{country.name.common}</p>
                        </Link>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default HomePage;
