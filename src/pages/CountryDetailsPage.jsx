import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

  const params = useParams()
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`)
      .then(res => res.json())
      .then(data => {
        setState(data)
      })
      .catch(error => console.log(`Error fetching data: `, error))
  }, [params.countryId])

  if (!state) {
    return <p>Loading...</p>;
  }

  return (
    <> 
      <section className='d-flex flex-column align-items-center'  >
        <div className='m-4 '>Country Details </div>
        <h3 className='list-group mb-4 '>{state.name.common}</h3>
     
          <div className='row ' style={{width: "800px"}}>
            <div className='col-6 border-bottom'>
              <p className='border-bottom'>Capital :</p>
              <p className='border-bottom'> Area :</p>
              <p>Borders :</p>
            </div>
            <div className=' col-6 border-bottom align-items-center'>
              <p className='border-bottom'>{state.capital[0]}</p>
              <p className='border-bottom'>{state.area} km2</p>
              <ul className=''>
                {state.borders.map(border => (
                  <li key={border}><Link to={`/${border}`} >{border}</Link></li>
                ))}
              </ul>
            </div>
          </div>
      
        <Link to={"/"} className='m-5' >Volver</Link>
      </section>
    </>
  )
}

export default CountryDetails;
