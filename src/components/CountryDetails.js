import React from "react"
import axios from 'axios'

class CountryDetails extends React.Component{

    state={
        capital:"",
        area:"",
        borders:[],
        name: "",
    }

    async componentDidMount(){
        const countryId = this.props.match.params.id
        const findCountry = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
        console.log(findCountry.data.borders)
        this.setState({
            capital: findCountry.data.capital,
            area: findCountry.data.area,
            borders: findCountry.data.borders,
            name: findCountry.data.name
        })
    }
    render(){
        const {capital, area, borders, name} = this.state
        return (
            <>
            <h3>Country Detail</h3>
            <h2>{name}</h2>
            <h3>Capital: {capital}</h3>
            <ul>{borders.map((border)=>{
                return(
                    <li>{border}</li>
                )
            })}</ul>
            <p>Area: {area} kms</p>
            </>
        )
    }

}


export default CountryDetails