import React from "react";
import { Link }  from "react-router-dom"

export const CountriesList = ({data})=>(
    
    <ul className="list-group scroll-style">
        {data.map((item,index)=>
        <li  key={index} className="list-group-item">
            <Link to={{
                pathname:"/detail",
                state:item
            }}>
                    {item.flag}
                    {item.name.official}
            </Link>
                </li>
            )
        }
    </ul>
)
    