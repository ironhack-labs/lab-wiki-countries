import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Countries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.Countries,
            idx: '',
        }
    }

    color = (idx) => {
        this.idx = idx
    }

    render() {
        return (

            <div className="scrolli">


                {this.state.countries.map((elm, idx) => {

                    return (

                        <div key={idx} className="row border py-2" >
                            <div className="col-2"> {elm.flag}</div>
                            <div className="col-9"><NavLink to={`/country-detail/${elm.cca3}`} onClick={() => this.color(idx)}
                                activeStyle={{ color: 'purple' }}>
                                <h5>{elm.name.official}</h5>
                            </NavLink></div>
                        </div>


                    )
                })

                }

            </div >
        )
    }

}

export default Countries;