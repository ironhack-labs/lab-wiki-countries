import React  from 'react'
import countries from '../countries.json'
import { Link, NavLink } from 'react-router-dom';

const CountryDetails =(props) =>{
    let getCountry=id=> countries.find(obj=>obj.cca3===id);
    const {params} =props.match;
    const foundCountry=getCountry(params.cca3)
    console.log(foundCountry)
    
    return(
        <div>
             <p> {foundCountry.flag}</p>
            <h2>
                {foundCountry.name.common}

            </h2>

            <h3>
                Paises:{foundCountry.area}
            </h3>
            <Link to="">Back</Link>
           
        </div>
    );
}

export default CountryDetails