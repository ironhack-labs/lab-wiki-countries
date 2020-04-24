import React, { Component } from 'react';
import countries from '../../countries.json';
import Country from '../Country';
import ListCountries from '../ListCountries';

class PageCountries extends Component {
    state = {
        countries: countries,
    }

    getCountry = (id,countries) => {
        let findCountry = '';
        countries.forEach((country) =>{if(country.cca2 === id) { findCountry = country}});
        return findCountry;
    }

    getBorders = (countries,countriesAll) => {
        let Allborders = [];
        let find = {};
        countries.borders.forEach((border) =>{
            countriesAll.forEach((country) => {
                if(country.cca3 === border)
                    find = country;
            })
            Allborders.push(find);
        });
        return Allborders;
    }
    
    render(){
        const { countries } = this.state;
        const  id  = this.props.match.params.id;
        return (
            <div>
                <div className="boxTitle">
                    <h1 className="title"> Wiki Countries </h1>
                </div>
                <ListCountries countries={countries}/>
                <Country country={this.getCountry(id,countries)} borders={this.getBorders(this.getCountry(id,countries),countries)}/>
            </div>
        )
    }
}

export default PageCountries;