import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {
    const [countries,setCountries] = useState([]);
    const [fetching, setFetch] = useState(true);


    useEffect(()=>{
        axios.get("https://ih-countries-api.herokuapp.com/countries").
        then((response)=>{
            setCountries(response.data);
            console.log(response.data)
            setFetch(false);
        })
    },[])

    return (
        <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <h1 style={{ fontSize: "24px"}}>
            WikiCountries: Your Guide to the World
        </h1>
        {fetching && <h2>⚙️Loading...⚙️</h2>}
        <div className="list-group">
        {countries.map((country)=>{
            return(
                <Link key={country._id} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action"> <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>{country.name.official}</Link>
            )
        })}
        </div>
        </div>
    )
}

export default HomePage;
