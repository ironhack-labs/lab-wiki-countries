import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"
import Home from "./pages/Home"
import Detail from "./pages/Detail"

//const Home = () => <h1>Home</h1>
//const Detail = () => <h1>Detail</h1>

const router = () => {
    return (    
    <Router>
        <LayoutApp>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Detail} path="/:cca3"/>
            </Switch>
        </LayoutApp>
    </Router>
    )
}


export default router   