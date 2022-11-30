import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

import './CountriesDetails.css'


const CountriesDetails = () => {
    
    const { alpha3Code } = useParams()
    
    const [myCountry, setMyCountry] = useState([])


    // const detailedCountry = countries.find(elem => elem.alpha3Code === alpha3Code)

    useEffect(() => {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then(res => res.json())        
          .then(countryData => {      
            
          setMyCountry([countryData])          
        })
      .catch(err => console.log(err))   
      
    }, [alpha3Code])
 

    return (
                
        <section className='mt-2'>

            
            {myCountry[0] && 
            <div className="card">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry[0].alpha2Code.toLowerCase()}.png`} className="card-img-top cardImg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{myCountry[0].name.official}</h5>
                    <p className="card-text"><strong>Capital: </strong>{myCountry[0].capital}</p>
                    <p className="card-text"><strong>Idiomas: </strong>{Object.values(myCountry[0].languages).map(elem => {
                        return <span key={elem} >{elem} |</span>
                    })}</p>
                        
                    <p className="card-text"><strong>Fronteras: </strong>{myCountry[0].borders.map(elem => {
                        return <Link to={`/${elem}`} key={elem} >{elem} |</Link>
                    }) }</p>
                    <p className="card-text"><strong>Region: </strong>{myCountry[0].region}</p>

                    
                </div>
            </div>
            }
        </section>
    )
}

export default CountriesDetails