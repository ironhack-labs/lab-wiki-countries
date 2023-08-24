import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




const HomePage = () =>{

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries").then((response) => {
            setCountries(response.data);
          }).catch((error) => {
            console.log(error);
          });
    }, [countries])
    
    if (countries === null){
        return (<h1>Loading...</h1>)
    }

    return(

        <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
        
        
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
        {countries.map((item) => {
                return (
                    <>
                    <Link key={item._id} className={`list-group-item list-group-item-action ${({ isActive }) => isActive ? "active" : ""}`} to={`/${item.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}/> {item.name.common}</Link>
                
                    </>
                );
            })}
          {/* <Link className="list-group-item list-group-item-action active" to="/FRA">🇫🇷 France</Link> */}
        </div>
      </div>
  
    )
}




export default HomePage;
