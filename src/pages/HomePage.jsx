import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { Card, Divider} from "antd";

function HomePage() {
    const [countries, setCountries] = useState([])
    const fetchApi = "https://ih-countries-api.herokuapp.com/countries"
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get(fetchApi).then((response)=>{
            setCountries(response.data)
            console.log(countries)
            isLoading(false);
        })
      }, [])
    return(
        <Card className="container" style={{maxHeight: "90vh", overflow: scroll}}>
            <Divider id="heading-home"style={{fontSize: "24px"}}>Your Guide to the World</Divider>
            {loading ? <Divider>Loading...</Divider> : countries.map((country)=>{
                return(<Card key={country._id} id="country-card">
                    <Link id="country-info"to={`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                        <h3 id="country-name">{country.name.common}</h3>
                    </Link>
                </Card>)
            }) }
        </Card>
    )
}

export default HomePage;
