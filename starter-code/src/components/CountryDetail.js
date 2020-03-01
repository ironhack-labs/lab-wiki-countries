import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import  countries  from '../countries.json';
import CountryCard from './CountryCard'
const CountryDetail = (props) => {
    
    let [data, setData] = useState({});

    useEffect(() => {
/*         axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err)) */
    setData(data)
    }, [])

        return(
        <div>
            {countries &&  countries.map((country, i) =>  
                <CountryCard country={country} key={i}/>
            )}
        </div>
        )
}

export default CountryDetail;


export { CountryDetail };