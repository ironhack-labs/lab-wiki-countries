import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Detail from './components/Detail'

const Routes = () => (
  <BrowserRouter>
    <div className="container">
    <Route path="/" component={Menu} />
    <Route path="/country/:cca3" component={Detail} />
    </div>
    </BrowserRouter>
)

export default Routes
