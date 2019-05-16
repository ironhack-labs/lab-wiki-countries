import React from 'react'
import countries from '../countries.json'

import { Link } from "react-router-dom";


export default class CountryDetails extends React.Component{

    state={
        
    }
    

    render(){
        console.log(this.props)
        let country = countries.find((eachCountry)=>{
            return eachCountry.flag === this.props.match.params.id
        })
        console.log(country)

        let theBorders = country.borders.map(eachBorder =>{
            return <li><Link>{eachBorder}</Link></li>
        })


        return(
            <div style={{width: '58%', border: 'black 2px solid'}} >
                <div class="col-7" style={{marginLeft: '20%', marginTop: '40%', fontSize: '30px'}}>
            <h1>{country.name.common}{country.flag}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {theBorders}
                    {/* <li><Link to={`/country/${country.border}`}>{country.borders}</Link></li> */}
                      {/* <li><a href="/AND">Andorra</a></li> */}
                      

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        )
    }
}

