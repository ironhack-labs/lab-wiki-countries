import React from "react";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

export default function Routes(props) {
    const clickOnCountry = props.clickOnCountry;
    return(
        <Switch>
            <Route exact path="/" component={() => <div></div>} />
            {/* ++ ATENCIÓN: En el Route SE SOBRESCRIBE el props, por eso se respalda y se agrega de nuevo. */}
            <Route exact path="/:cca3" component={ (props) => <CountryDetail {...props} clickOnCountry={clickOnCountry} /> } />
        </Switch>
    )
}