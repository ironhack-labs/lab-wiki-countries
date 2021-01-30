import React from 'react'
import {Link} from 'react-router-dom'


export default function CountriesList(props) {
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {
                    props.countries.map(el => {

                        return (
                            <Link to={`/${el.cca3}`}
                                  key={el.cca3}
                                  className="list-group-item list-group-item-action"
                            >
                                {el.flag} {el.name.common}
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}
