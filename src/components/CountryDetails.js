import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CountryDetails = ({countries}) =>{
    const [country, setCountry] = useState({});

    const params = useParams();

    
    useEffect(() => {
        let countryGot = countries.find(eachCountry => eachCountry.alpha3Code === params.alpha3Code);
        setCountry(countryGot);
        console.log(countryGot);
    },[countries, params.alpha3Code])

   if (!country.alpha3Code){
    return ''}
   

 return(
    <div>
        <p>Capital:{country.capital}</p>
        <p>Area: {country.area}</p>
        <ul>
            {country.borders.map((cBorder) => <li key={`${cBorder}-border`}><Link to={`/${cBorder}`}>{cBorder}</Link> </li>)}
        </ul>
    </div>
 )

}
export default CountryDetails;