import React from 'react';
import { Link } from 'react-router-dom';


export default function CountriesList({list}) {
  return (
    <div className='list'>
        {list && list.map((country) => {
            return (
                <div key={country._id} className='list1'> 
                <Link className='list'  to={`/${country.alpha3Code}`} >

                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` }alt="" />
                <h1 className='countryName'>{country.name.common}</h1>

                </Link> 
                </div>
            )
        })}
    </div>
  )
}
