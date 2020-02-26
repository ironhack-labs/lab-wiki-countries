import React from "react";
import {Link} from "react-router-dom";

export default class Countrys extends React.Component {
    render(){
        return(
            <div>
             <Link className="list-group-item list-group-item-action text-left" to={this.props.cca3}> {this.props.flag} {this.props.common}</Link>
            </div>
        )
    }
}

//{this.props.demonym}