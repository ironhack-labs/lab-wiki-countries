import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({countries}) => {

    // const activeText = { color: 'white', backgroundColor: "blue" }

    return (

        <nav>
        <div>
      Countries List
      { countries && countries.map( elm => {

        return (
        <div>
          <div>

            <NavLink to={`/countrydetails/${elm.cca3}`}>{elm.name.common}</NavLink>

          </div>
        </div>
        )
      })
      }
    </div>
        </nav>
    )
}

export default Navbar
