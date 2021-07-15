import React from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom"

class CountryDetails extends React.Component{

    state={
        capital:"",
        area:"",
        borders:[],
        name: "",
        alpha3Code:""
    }
    async componentDidUpdate(prevProps){
        //If you set the state inside component didUpdate you are going
        //to end up in an infinite loop
        const countryId = this.props.match.params.id
        const findCountry = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
        let newArray = []
        if (findCountry.data.borders){
            for (let i = 0; i<findCountry.data.borders.length;i++){
                let countryFound = await axios.get(`https://restcountries.eu/rest/v2/alpha/${findCountry.data.borders[i]}`)
                newArray.push(countryFound.data)
            }
        }
        if (this.props !== prevProps){
            this.setState({
                capital: findCountry.data.capital,
                area: findCountry.data.area,
                borders: newArray,
                name: findCountry.data.name,
                alpha3Code: findCountry.data.alpha3Code
            })
            console.log("try")
        }
        console.log("component did update")
    }

    async componentDidMount(){
        const countryId = this.props.match.params.id
        const findCountry = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
        console.log(findCountry.data.borders)
        let newArray = []
        if (findCountry.data.borders){
            for (let i = 0; i<findCountry.data.borders.length;i++){
                let countryFound = await axios.get(`https://restcountries.eu/rest/v2/alpha/${findCountry.data.borders[i]}`)
                newArray.push(countryFound.data)
            }
        }
        console.log(newArray)
        this.setState({
            capital: findCountry.data.capital,
            area: findCountry.data.area,
            borders: newArray,
            name: findCountry.data.name,
            alpha3Code: findCountry.data.alpha3Code
        })
    }
     render(){
        const {capital, area, borders, name, alpha3Code} = this.state
        
        
        return (
            <>
            <h2>{name}</h2>
            <hr />
            <h3>Capital: {capital}</h3>
            <hr />
            <p>Area: {area} kms</p>
            <ul> {borders.map((border)=>{
                return(
                    <li> <NavLink key={border.alpha3Code} activeStyle={{color:"red"}} to={`/countryDetails/${border.alpha3Code}`}>{border.name}</NavLink></li>
                )
            })}</ul>
            <hr />
            
            </>
        )
    }

}


export default CountryDetails