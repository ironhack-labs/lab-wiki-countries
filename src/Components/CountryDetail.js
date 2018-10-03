import React from 'react';


export class CountryDetail extends React.Component {
    render(){
        const {name, cca3} = this.props;
        return (
        <li>
            <div>
                <span>{name}{cca3}</span>
            </div>
        </li>   
    )
    }
        
}