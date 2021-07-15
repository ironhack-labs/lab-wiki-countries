import React from 'react'
import {NavLink} from "react-router-dom"



export default function Navbar() {
    return (
        <div>
                    <div>
            <ul>
                <li>
                    <NavLink activeStyle={{color:"red"}} exact to="/">Wiki Countries</NavLink>
                </li>
            </ul>
        </div>
        </div>
    )
}
