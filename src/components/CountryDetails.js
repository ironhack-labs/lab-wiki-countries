import React, {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'

 function CountryDetails(props) {

    const [countrySelected, setCountrySelected] = useState({})

  const getData = () => {
      console.log(props.location)
      let  countryId = props.match.params.countryId

      let filteredCountry = countries.filter((country)=>{
          return country.cca3 == countryId
      })
    
      const{name, capital, area, borders} = filteredCountry[0]
  
     

      let countryData ={
          name: name.official,
          capital: capital[0],
          area: area,
          borders: borders
      }
      setCountrySelected(countryData)
  }

          useEffect(()=>{
              getData()
          }, [])

          useEffect(()=>{
            if (countrySelected !== props.match.params.countryId){
                getData()
            }
        })

    return (
        <div >
         <div class="col-7">
                    <h1>{countrySelected.name}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{countrySelected.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countrySelected.area} km
                            <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            {/* <td>Borders</td>
                            <td>
                            <ul>
                                {
                                    countrySelected.borders.map((border)=>{
                                        return <li><Link to={`/${border}`}>{border}</Link></li>
                                    }) 
                                }
                            </ul>
                            </td> */}
                        </tr>
                        </tbody>
                    </table>
                    </div>
        </div>
    )
}


export default CountryDetails