import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class LeftMenu extends Component {
    state = {
        countries: countries
    }
    render() {
        const { countries } = this.state;
        return (
            <div
                style={{
                    width: '30vw',
                    height: '800px',
                    overflow: 'scroll'
                }}>
                {
                    countries.map((country, i) => (
                        <Link to={`/country/${country.cca3}`}
                            className="list-group-item list-group-item-action"
                            key={i}>
                            <button type="button" class="btn btn-lg btn-block" style={{display:"flex"}}>
                                <div>
                                    {country.flag}
                                </div>
                                <div>
                                    {country.name.common}
                                </div>
                            </button>


                        </Link>
                    ))
                }
            </div>
        )
    }

}

export default LeftMenu;