import { Link } from "react-router-dom";
import React, {Component} from 'react'
import Axios from 'axios'  
import countries from '../countries.json'



class CountriesList extends Component {

    state = {
        countries: []

}

//async await to handle asnych flow
async componentDidMount()  {    //only for fetching data from external API
    let response = await Axios.get('https://restcountries.eu/rest/v2/all')
    this.setState({
        countries : response.data.results            //axios returns in data-property


    })


}


render(){

       const {countries} = this.state
//if data fetching to slow, show loading screen
    if(countries.length === 0){
         return <div> Looooaa-ding...</div>

}

return (       
      <div>  
      {

      countries.map((country, i)=> {
            return <p key = {country.cioc}>     {/*add unique stuff in loop so react doesnt complain */}
                 
                  {/* insert image of flag here.   display flex? next to name */}
                  <Link to = {`/v2/alpha/${country.cioc}`} >{country.name}</Link>          {/*<-----template literal! else is gonna treat {code} as simple substring*/}
                 
               </p>

              
               //https://restcountries.eu/rest/v2/alpha/{code}

            })


      }
     </div>


   )


 }



}



export default CountriesList;
