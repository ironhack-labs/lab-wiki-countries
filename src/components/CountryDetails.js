import React from 'react'
import { Link } from "react-router-dom";
class CountryDetails extends React.Component {
    
    render(){
        const countrySelected = this.props.match.params.alpha3Code
        const selected = this.props.countries.filter((country)=>{
            return country.alpha3Code === countrySelected
        })

console.log(selected[0].capital)
        return(
            <div className='CountryDetails'>
                  <h1>{selected[0].name}</h1>
                    <hr />
                    <p>Capital <span>{selected[0].capital}</span></p>
                    <hr />
                    <p>Area <span>{selected[0].area}km²</span></p>
                     <ul>    
                        {selected[0].borders.map((border, index)=>{
                                return(
                                   <li key={index}>
                                   <Link to={`/countrydetails/${border}`}>
                                   {this.props.countries.filter((country)=>{
                                        return country.alpha3Code === border
                                    })[0].name}
                                    </Link>
                                    </li>
                                )
                        })}
                    </ul> 

            </div>
        )
    }
}

export default CountryDetails