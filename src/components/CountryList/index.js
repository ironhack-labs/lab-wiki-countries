import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';


const CountryList = (props) =>{

    const [ countries, setCountries ] = useState([]);
    useEffect(()=> {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(res => { console.log("larespuesta", res)
        setCountries(res.data)
    
    })
        .catch(error => {console.log("el error", error)})
    }, [])

    return(
            <div className="col-5" style={{maxheight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                    {countries.map((country, index) =>{
                        return(
                            <Link className="list-group-item list-group-item-action" 
                            to={country.alpha3Code}
                            key={index}
                                >{country.name.official}</Link>
                        )
                    })}
                </div>
            </div>
    )
};

export default CountryList;