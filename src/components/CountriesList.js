import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class CountriesList extends Component {

    state = {
        countries: []
      }

      async componentDidMount() {
       let countriesResponse = await axios.get('https://restcountries.eu/rest/v2/all')
       
       this.setState({    
        countries: countriesResponse.data
       })
      }
      

    render() {

        const { countries } = this.state

        if(this.state.countries.length === 0){
            return 'Loading Countries! ...'
          }
        
        

        return (
            <div>

                {
                    countries.map((country, i) => {
                        return(
                            <p key={i}> 
                            <Link to={`/${country.alpha3Code}`} > {country.name} </Link> 
                            </p>
                        ) 
    
                    })
                }
            
                
            </div>
        )
    }
}

export default CountriesList

