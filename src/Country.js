import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class Country extends React.Component {
    render(){
        const {name, cca3, onSelect} = this.props;
        return(

        <li key={cca3} onClick={() => onSelect(cca3)} style={{listStyle:"none"}} class="list-group-item list-group-item-action">
            <div className="row">          
                    <span>{name} {cca3}</span>
            </div>
        </li>
        )
    }
}
