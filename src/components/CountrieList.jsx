import React, { Component } from 'react';
import CountryCard from './CountryCard';
import countries from '../countries.json';
import './countries-list.css';

const finalCountries=[...countries];
finalCountries.forEach(c=>c.flag=`https://www.countryflags.io/${c.cca2}/flat/64.png`)
class CountrieList extends Component {

    render() {
        return (
            <div className='col-5 countries-list'>
                <div className="list-group">
                    {finalCountries.map(c=><CountryCard key={c.cca3} {...c}/>)}
                </div>
            </div>
        );
    }
}

export default CountrieList;