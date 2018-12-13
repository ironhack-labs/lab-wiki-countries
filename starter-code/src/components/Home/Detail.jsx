import React from 'react';
import {Link} from 'react-router-dom'

const Detail = ({name, capital, area, borders, getId}) =>{
    return(
        <div>
            <h1 className="h1-detail">{name.common}</h1>
            <hr/>
            <p>Capital: {capital[0]}</p>
            <hr/>
            <p>Area: {area} km2</p>
            <hr/>
            <p>Borders:</p>
            <p>{borders.length ? borders.map((border, index)=>{
                return <Link key={index} onClick={()=>getId(border)} to={`/detail/${border}`}>
                    <button>{border}</button> <br/>
                </Link>
            }): <p>No borders</p> }</p>
            
        </div>
    )
} 

export default Detail