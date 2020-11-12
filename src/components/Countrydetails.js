import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const Countrydetails = (props) => {
 console.log(props)  

 let theCountry = id => countries.find(obj => obj.cca3 === id);

 const { params } = props.match;

 const found=theCountry(params.id)

 console.log(theCountry);

    return (
      
      
      <div className="">
      
      <table>
          <th>
          <tr>
              <td> <h1>{found.name.common}</h1></td> 
          </tr>
          </th>
          <tbody>
              <tr>
              <td> <h4>Capital</h4></td> 
              <td> <h4>{found.capital}</h4></td> 
              </tr>
              <tr>
              <td> <h4>Area</h4></td> 
              <td> <h4>{found.area}</h4></td> 
              </tr>
              <tr>
              <td> <h4>borders</h4></td> 
              <td> <ul>
                {found.borders.map((border, index) => {
                    let borderCountry=countries.find(obj => obj.cca3 === border);
                   

                    return (
                    <li className="listElement" key={index}>
                        <Link to={`/country/${borderCountry.cca3}`}><h3>{borderCountry.name.common}</h3></Link>
                    </li>
                )
                })}
      </ul></td> 
              </tr>
          </tbody>
      </table>
       
         
            
     
      
    </div>
    )
}


export default Countrydetails;