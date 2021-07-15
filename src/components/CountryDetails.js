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
        if (this.props !== prevProps){
            this.setState({
                capital: findCountry.data.capital,
                area: findCountry.data.area,
                borders: findCountry.data.borders,
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
        this.setState({
            capital: findCountry.data.capital,
            area: findCountry.data.area,
            borders: findCountry.data.borders,
            name: findCountry.data.name,
            alpha3Code: findCountry.data.alpha3Code
        })
    }
    render(){
        const {capital, area, borders, name, alpha3Code} = this.state
        return (
            <>
            <h3>Country Detail</h3>
            <h2>{name}</h2>
            <h3>Capital: {capital}</h3>
            <ul>{borders.map((border)=>{
                return(
                    <li><NavLink activeStyle={{color:"red"}} to={`/countryDetails/${border}`}>{border}</NavLink></li>
                )
            })}</ul>
            <p>Area: {area} kms</p>
            </>
        )
    }

}


export default CountryDetails