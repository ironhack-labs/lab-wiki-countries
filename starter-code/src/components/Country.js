import React from "react";
import { Link } from "react-router-dom";
import data from "../countries.json";

const Country = () =>{
    return(
        <div>
            {
                data.map(elements =>{
                    return (
                        <Link to ={`/${elements.cca3}`}>
                            <span>{elements.flag}</span>
                            <div>{elements.name.common}</div>
                            <hr/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Country;