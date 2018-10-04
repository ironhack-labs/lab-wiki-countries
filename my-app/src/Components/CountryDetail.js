import React from 'react';


export class CountryDetail extends React.Component {
    render(){
        const {name, cca3, flag} = this.props;
        return (
        <div>
          <span>{flag}</span>
          <span>{name}{cca3}</span>
        </div>   
    )
    }
        
}