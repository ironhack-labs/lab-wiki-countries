import React from 'react'
import { Link } from 'react-router-dom'

const CountryInfo = (props) => {

  //return only one country that matches dthe params
  const country = props.countries.filter(c => {
    if(c.cca3 === props.match.params.countryCca3) return c
  })

  const getBorderName = country.map(c => {
    c.borders.map(element => {
      return props.countries.filter(n => {
        if(element === n.cca3) return n.name.common
      })
    })
  })

  

  return(
    <div className="text-left">
      {country.map((c, i) => {
        return(
          <div  key={i}>
            <h1>{c.name.common}</h1>
            <hr/>

            <div className="row">
              <div className="col-6"><h5>Capital</h5></div>
              <div className="col-6"><h6>{c.name.common}</h6></div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-6"><h5>Area</h5></div>
              <div className="col-6"><h6>{c.area} km2</h6></div>
            </div>
            <hr/>
            {c.borders.length ? (
              <div className="row">
                <div className="col-6"><h5>Borders</h5></div>
                <div className="col-6">
                  <ul>
                    {c.borders.map((border, index) => {
                      return(
                        <Link key={index} to={`/${border}`}>
                          <li>{getBorderName}</li>
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ) : <h6>No borders</h6> }
          </div>
        )
      })}
    </div>
  )
}

export default CountryInfo;