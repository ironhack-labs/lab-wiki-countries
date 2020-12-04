import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class CountriesList extends Component{
    render(){
        return(
            <div className="list-group">
            {this.props.countries.map((el) => (
          <Link onClick={() => this.props.handleClick(el)} className="list-group-item list-group-item-action" key={el.cca3 } to={`/${el.name.common}`}>
           <img src={`https://www.countryflags.io/${el.cca2}/flat/64.png`} style={{width:"10px"}} alt="flag">
           </img> {el.name.common }</Link>
            )
          )
          }
                </div>
        )
    }
}