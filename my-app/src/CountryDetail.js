import React from 'react';
import countries from './countries.json'
import 'bootstrap/dist/css/bootstrap.css';


export class CountryDetail extends React.Component {
    render(){
        const {name, cca3, onSelect} = this.props;
        return(
        <li onClick={() => onSelect(cca3)} style={{listStyle:"none"}}>
            <div className="row">          
                    <span>{name}{cca3}</span>
            </div>
        </li>
        )
    }
    

}