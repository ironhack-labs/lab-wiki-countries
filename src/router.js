import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Navbar from './components/Navbar'

const router = () => {
    return (
        <Router>
            <Navbar />
        </Router>
    )
}

export default router
