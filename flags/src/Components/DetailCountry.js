import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'
// import queryString from 'query-string'

const DetailCountry = (props) =>{
    console.log(props.match.params.id)

    const getCountry = countries.find(({cca3})=>cca3===props.match.params.id)
    console.log(getCountry)
    // const borderCountry= getCountry.map((elm)=>{
        
    // })
      return(
        <>
        <div className="border-bottom border-dark">
        <h2>{getCountry.name.official}</h2>
        </div>
        <div className="border-bottom border-dark">
        <h3>Capital {getCountry.capital[0]}</h3>
        <h3>Area {getCountry.area}</h3>
        <ul>
            {getCountry.borders.map((elm,idx)=>(
               <li key={idx}> <Link  to={`/${elm}`}>{elm}</Link></li>
            ))}
        </ul>
        </div>
        
        </>
    )
}

export default DetailCountry