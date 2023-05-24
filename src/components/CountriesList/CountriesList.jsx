import { useEffect, useState } from 'react'
import countriesData from '../../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = ({ lol }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {lol.map((elm) => {
                            return (
                                <div className="list-group-item list-group-item-action">
                                    <img src={'https://flagpedia.net/data/flags/icon/72x54/' + elm.alpha2Code.toLowerCase() + '.png'} alt="hello there" />
                                    <Link to={`/${elm.alpha3Code}`}>{elm.name.common} </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CountriesList