import React from 'react';
import countries from '../countries.json'
import {CountryDetail} from './CountryDetail';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countries,
            pickCountry: false
        }
    }
    render() {
        return(
            <div>
                <ul>
                    {this.state.countries.map((e,index) =>{
                        return(
                            <CountryDetail key={index} name={e.name.common} cca3={e.cca3} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}
