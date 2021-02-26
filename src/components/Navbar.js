import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
          WikiCountries
            </Link>
            </nav> 
        </div>
    )
}
