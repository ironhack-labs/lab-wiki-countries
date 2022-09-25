import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {
    const divStyle = {
        maxHeight: "90%",
        overFlow: "scroll",
    }
    
    // console.log(props.arr);
    const {countries} = props //destructuracion
    

  return (
    
    <div className="col-5" style={divStyle}>
        <div className='list-group'>
        {
          countries.map((country,pos) => {
            return (
              <Link to={`/${country.alpha3Code}`} key={pos}>
                <div className="list-group-item list-group-item-action" >
                <img 
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag.img"
                />
                <p>{country.name.common}</p>
                </div>
              </Link>  
            )
          })
        }
        </div>
    </div>
  )
}

export default CountriesList