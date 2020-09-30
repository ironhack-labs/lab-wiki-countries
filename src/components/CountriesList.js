import React, { Component } from 'react'


import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import countries from "./countries.json"

 
class CountriesList extends Component {
    constructor() {
        super()
        this.state = { }
    }


    render() {
 
        return (
            <>
                <div className="col-5" >
                    <div className="list-group">
                        {countries.map((elm, index) => <Link className="list-group-item list-group-item-action" to={elm.cca3}> {elm.flag}  {elm.name.common}</Link> )}
                    </div>
                </div>

            </>
        )
    }
    }
export default CountriesList