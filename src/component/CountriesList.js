import React from 'react';
import countries from '../countries.json'
import {Link} from 'react-router-dom';

export default class CountriesList extends React.Component {


    render() {
        return(
            <div className="ui middle aligned divided list">
            <div className="item">
            <div className="content">
                {countries.map((v, i) => {
                    return <Link to={`/countries/${v.cca3}`} 
                    className="list-group-item-action"
                    key={i}>
                        <img className="ui avatar image"
                        src={`https://www.countryflags.io/${v.cca2}/flat/64.png`}
                        alt="{i}"
                    />
                    {v.name.common}
                    </Link>
                })}
            </div>
                
            </div>
            </div>
        )
    }
}