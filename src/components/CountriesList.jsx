import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


function CountriesList(props){
  

const [countriesList, setCountriesList] = useState([]);


useEffect(() => {
axios
.get("https://ih-countries-api.herokuapp.com/countries")
.then((response)=>{

 setCountriesList(response.data)
    })
      



.catch((err) => console.log(err));
     
    }, [])

return (
<div>
<h1>Country list</h1>
    {countriesList.map((country)=>{
        return(
            <div key={country.alpha3Code} className="country">
            <h3>
            <Link to={`/countries/${country.alpha3Code}`}>{country.name.common}</Link>
            </h3>
            <p></p>


            </div>
        )
    })}
</div>

);
}


export default CountriesList;