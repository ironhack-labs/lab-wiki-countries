import React from 'react';
import {NavLink} from 'react-router-dom'

const List = ({name,flag,cca3,getId}) => {
    return(<div>
        <NavLink activeClassName="linkActive" to={`/detail/${cca3}`}>
        <div onClick={()=>getId(cca3)} className="navlink">
            <p>{flag}<span>{name.common}</span></p>
        </div>
        </NavLink>
    </div>)    
}

export default List