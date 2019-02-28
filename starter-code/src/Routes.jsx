import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Detail from './components/Detail';
import Page404 from './components/Page404';

export default function (){
    return (
        <Switch>
            <Route exact path="/" component={()=><div>Empty</div>} />
            <Route exact path="/:id" component={Detail} />
            <Route component={Page404} />
        </Switch>
    )
}