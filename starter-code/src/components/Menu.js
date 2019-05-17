import React from 'react';

const Menu = (props) =>{
    let {name, cca3, flag} = props
    let {common} = name;
    return (
        <a className='list-group-item list-group-item-action' href= {`/${cca3}`}> 
        {flag} {common}
        </a> 
    )
}

export default Menu