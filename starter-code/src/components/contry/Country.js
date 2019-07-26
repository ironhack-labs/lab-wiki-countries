import React, { Component } from 'react';
import Data from '../../countries.json';
import Countries from '../../components/countries/Countries.js'

export default class Country extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: Data,
            theCountry: [],
            borderCountries: []
        }
    }

    componentWillMount(){
        this.fetchCountry(this.props.match.params.theCountry);
    }

    componentDidMount(){
        this.fetchCountry(this.props.match.params.theCountry);
        this.createBorderCountries();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.match.params.theCountry !== nextProps.match.params.theCountry || this.state.theCountry[0].cca3 !== nextState.theCountry[0].cca3){
            this.fetchCountry(nextProps.match.params.theCountry);
            this.createBorderCountries();
            return true;
        }else{
            return false;
        }
    }

    fetchCountry(countrySelected){
        let country = this.state.countries.filter((country, i)=>{
            return country.cca3 === countrySelected;
        });
        return this.setState({theCountry: country});
    }

    createBorderCountries(){

        if(this.state.theCountry[0].borders.length > 0){
            
            let countries = [];

            this.state.theCountry[0].borders.forEach(borderCountry => {
                let filteredCountry = this.state.countries.filter((eachCoutry)=>{
                    return borderCountry === eachCoutry.cca3;
                })
                countries.push(filteredCountry[0]);
            });

            console.log(countries);

            return this.setState({ borderCountries: countries});
        }
    }

    renderBorderCountries(){
       return  this.state.borderCountries.map((country, i)=>{
            return <Countries key={i} flag={country.flag} name={country.name.common} />
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.theCountry[0].name.common}</h1>
                <div>
                    {this.renderBorderCountries()}
                </div>
            </div>
        )
    }
}

