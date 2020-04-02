import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Country extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="list-group-item list-group-item-action">
                <Link to = {`/country-detail/${this.props.cca3}`}>{this.props.name}</Link> 
            </div>
        )
    }
}

export default Country;