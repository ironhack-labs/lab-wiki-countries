import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = props => {
    return (

        <div style={{width: 500, marginRight: 50, marginLeft: 50}}>
            <div className="row" style={{width: 500}}>
                <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll', width: 500}}>
                    <ul className="list-group">
                    {props.countries.map((c, i) => {
                        return (
                        <li key={i} className="list-group-item list-group-item-action">
                            <Link 
                                to={{
                                    pathname: `/country/${c.cca3 }`,
                                    state: { country: c }
                                }}
                                style={{display: 'block', width:'100%', height:'100%', textAlign:'left', color: 'black'}}> 

                                <img
                                    className='flag' 
                                    style={{marginRight: 20, width:50}}
                                    src={`https://restcountries.eu/data/${c.cca3.toLowerCase()}.svg`}
                                    alt={c.cca3}></img>
                                {c.name.common} 
                            </Link>
                        </li>)
                    })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default CountriesList

