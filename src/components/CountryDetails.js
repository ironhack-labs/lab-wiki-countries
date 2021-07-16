import React, {Component} from 'react'
import Axios from 'axios'  //for Bonus API data fetching



export default class CountryDetails extends Component{    //for sake of pratice. less consitency


    state = {
         
       countryInfo: null

    }

    getData = async () => {
     
        let id = this.props.match.params.countryIndex  //cca of country stored in alpha/{code}       , key in API: cioc 
        let response = await Axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)


       let country = {
         id: this.props.match.params.countryIndex,          //Manish fragen nach Untersch props.match.params  && response.data
        //id: response.data.alpha3Code,    //or:   cioc property 
        name: response.data.name,
        borders: response.data.borders,
        capital: response.data.campital,
        area: response.data.area

     }
       this.setState({
          countryInfo: country
        })
    }
   
    componentDidMount(){
        this.getData()
    }

    componentDidUpdate(){          
        let newId = this.props.match.params.countryIndex
        let stateId = this.state.countryInfo.id
        if(newId !== stateId) {
            this.getData() 
        }
    }



render(){
    if(!this.state.countryInfo){
    return <p>Loading country details...</p>
  }


 const {countryInfo} = this.state

    return (

        <div>
            my CountryDetails
            <h1>{countryInfo.name}</h1>  
            <hr/>
            <p>Capital: {countryInfo.capital}</p>
            <hr/>
            <p>Area: {countryInfo.area}</p>
            <hr/>
            <p>Borders: {countryInfo.borders}</p>
        </div>

    )
 }
 
}








