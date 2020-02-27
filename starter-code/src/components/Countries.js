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
                        <div>
                            <NavLink to={`/country-detail/${elm.cca3}`} key={idx} className="row border py-2" onClick={() => this.color(idx)}
                                activeStyle={{ backgroundColor: '#8fd6d6' }}>
                                <div className="col-2"> {elm.flag}</div>
                                <div className="col-9">
                                    <h5>{elm.name.official}</h5></div>
                            </NavLink>
                        </div>


                    )
                })

                }

            </div >
        )
    }

}

export default Countries;