import React, { Component } from "react";
import { Link } from "react-router-dom";

class Countries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.Countries, 
            idx:0
        } 
    }

    render () {
        return (
            <div>
                {this.state.countries.map((elm, idx) => {
                    return (
                        <div key={idx} className="row border py-2" >
                            <div className="col-2"> {elm.flag}</div>
                            <div className="col-9"><Link to={`/country-detail/${elm.cca3}`}>
                                <h5>{elm.name.common}</h5>
                            </Link></div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Countries