import React, {Component}from 'react';
import countries from "../../countries.json";
import '../App.css'
import {Link} from "react-router-dom";
class Details extends Component{
  
  
  
  
    render(){
        const {id} = this.props.match.params
        let country =[]
        
        countries.map(elm => {
            if(elm.cca3 === id)
            {
                country = elm
                return country
            }
        })
        const borders =  country.borders.map((border) => {
            const borders = countries.find(country => {
              return country.cca3 === border;
            })
            return (<li><Link to={`/${border}`}>{borders.name.common}</Link></li>)
          }) 
      return (
        
              <section className="info" >

            <h1>{country.name.official}</h1>
            <hr></hr>
            <p>capital: {country.capital}</p>
            <hr></hr>
            <p>Area: {country.area} Km2</p>
            <hr></hr>
            <div>
            <p>Borders</p>
            <ul>
                
                    {borders}
                
            </ul>
            </div>

           </section>
        
    )
}

}

export default Details