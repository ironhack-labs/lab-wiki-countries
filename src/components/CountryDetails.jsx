import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ShortCodes from '../shortcodes.json'
import { Link } from "react-router-dom"; 

function CountryDetails() {
    const [foundCountry, setFoundCountry] = useState(null);

    const { countryCode } = useParams();
   
    useEffect( () =>  {
        const fetchData = async ()=> {
            const responseData = await fetch('https://ih-countries-api.herokuapp.com/countries/' + countryCode)
            const country = await responseData.json()
            setFoundCountry(country);
        }
        fetchData();
    }, [countryCode]);

    const toLongName = (code) => {
        const newObj = code.map(shortName => {
            const longName = ShortCodes.find(abbr => abbr['alpha-3']===shortName)
            return {short: shortName, long: longName.name}
        })
        return newObj;
    }

    return !foundCountry ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (        
    <div className="country-info position-sticky sticky-top" >
            <h1>{foundCountry.name.common}</h1>
            <ul className="list-group list-group-flush border-top">
                <li className="list-group-item d-flex justify-content-around" key={foundCountry._id+'c'}><span className="info-label">Capital </span><span className="flex-grow-1">{foundCountry.capital}</span></li>
                <li className="list-group-item d-flex justify-content-around" key={foundCountry.alpha2Code+'a'}><span className="info-label">Area</span> <span className="flex-grow-1">{foundCountry.area} km<sup>2</sup></span></li>
                <li className="list-group-item d-flex justify-content-around" key={foundCountry.alpha2Code+'b'}><span className="info-label">Borders </span><span className="flex-grow-1">
                    <ul className="info-list" >
                        {toLongName(foundCountry.borders).map(cc=><li key={cc.short}><Link to={'/'+cc.short}>{cc.long}</Link></li>)}
                    </ul></span>
                </li>
            </ul>
    </div>
        )
    
}
 
export default CountryDetails;
