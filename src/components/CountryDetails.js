import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import { useEffect } from 'react'

export default function CountryDetails(props) {
  let countriesResult = [...countries]
  let searchCriterium = props.match.params.cca3
  // console.log(searchCriterium)
  // let countryResult = countriesResult.find(props.cca3)
  const countryResult = countriesResult.find(({ cca3 }) => cca3 === searchCriterium)



  useEffect(() => {
   
    console.log(`✔ El pais ${countryResult.name.common} se mont'o en la vista`);

    return () => {
    
      console.log(`❌ El pais ${countryResult.name.common} se des mont'o en la vista`);
    }
  }, [])

  useEffect(() => {
    console.log(`🔃 El pais ${countryResult.name.common} sustituyo al anterior`);
  }, [searchCriterium])



  return (
    <div>
      <h1>{countryResult.name.common}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryResult.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countryResult.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryResult.borders.map(el => (
                  <li key={el}>
                    <Link to={`/${el}`}>
                      {(countriesResult.find(({ cca3 }) => cca3 === el)).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}