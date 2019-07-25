import React from 'react';
import { Link } from 'react-router-dom'


const CountryDetail = (props) => {
console.log(props)
  
  let data = props.countriesData.filter((elem) => {
   return elem.cca3.includes(props.match.params.cca3)
  })[0]

  const findCountry = (info) => {
    let country = props.countriesData.filter((elem) => {
      return elem.cca3.includes(info)
    })[0] 
    return country.name.common
  }

  return(
    <div className="col-7">
      <h1>{data.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{data.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{data.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  data.borders.map((e, index) =>{
                   return <li><Link to={`/${e}`}> {findCountry(e)} </Link></li>
                  })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail;