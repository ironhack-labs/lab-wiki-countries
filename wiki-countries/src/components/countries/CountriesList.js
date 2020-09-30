import React from 'react'
import Countries from '../../countries.json'


import {Link} from 'react-router-dom'

const list = () => {


    return (

        <div className="col-5" >
            <div className="list-group">
                {Countries.map(elm => <Link to={`/${elm.cca3}`} key={elm.cca3}> <p>{elm.flag} {elm.name.common} </p> </Link> )}
            </div>
        </div>

    )
}

export default list