import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class CountryDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            countryCode:'',
            countryData:{},
            borders:[], 
            countries:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id)
        .then(response =>{
            this.setState({countryData:response.data, countryCode:this.props.match.params.id})
            axios.get('https://restcountries.eu/rest/v2/')
            .then(response => {
                this.setState({
                    ...this.state,
                    countries:response.data
                })
                const borders = this.state.countryData.borders.map(borderCode => {
                    const border = this.state.countries.find(country => country.alpha3Code === borderCode)
                    if (border) {
                        return (
                            <div key={border.alpha3Code}>
                                <Link to={"/list/"+ border.alpha3Code}>{border.name}</Link>
                            </div>
                        )
                    }else{
                        return(
                        <div>
                            <p>Border not found</p>
                        </div>
                        )
                    }
                })
                this.setState({
                    ...this.state,
                    borders: borders
                })
            })
        }).catch(e => {
            console.log('Oops!An error ocurred', e)
        })
    }
    render() {
        let name =''
        let capital=''
        let area= 0
        if(this.state.countryData!=={}){
            name= this.state.countryData.name
            capital=this.state.countryData.capital
            area=this.state.countryData.area
            return (
                <div key={this.state.countryCode}>
                    <h1>{name}</h1>
                    <hr/>
                    <h3>Capital: {capital}</h3>
                    <hr/>
                    <h3>Area: {area} km2</h3>
                    <hr/>
                    <div>
                    <h3>Borders:</h3>
                        {this.state.borders}
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>There is no info for the country you are looking for!</h1>
                </div>
            )
        }
        
    }
}

export default CountryDetail