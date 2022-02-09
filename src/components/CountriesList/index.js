import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function CountriesList({}){
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
   axios.get('https://ih-countries-api.herokuapp.com/countries')
   .then(res => {setCountries(res.data) })
   .catch(e => {console.log('error', e)})
},[])


    return(
      <div className="container">
         <div className="row">
          <div className="col-5">
           <div className="list-group"> 
         <p className="list-group-item list-group-item-action" href="/"> 
       {countries.map((country, index)=>(<p key={index}>{country.name.common}</p>))}</p> 
</div> 
</div> </div>
</div>
            
        )
}



export default CountriesList