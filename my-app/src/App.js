import React from "react";
import "./style.css";
import countriesjason from "./countries.json";
import { Route, NavLink } from "react-router-dom";
import { CountryDetail } from "./Components/CountryDetail";


export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: countriesjason
        };
    }

    render() {
        return (
            //crear columna con algunas propiedades de paises
            <div className="container">
                <div className="panel panel-heading"></div>
                <div className="row">
                    <div className="col-5">
                        <div className="list-group">
                            {this.state.countries.map((e) => {
                                return (
                                    <NavLink
                                        key={e.cca3}
                                        to={'/' + e.cca3}
                                        className="list-group-item list-group-item-action disable"
                                    >
                                        {e.flag} {e.name.common}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
            {/*  Mostrar pais sobre el que has pinchado en su link */}
                    <div className="col-6">
                        <div className="list-group">
                            <Route
                                path="/:id"
                                render={(props) => (
                                    <CountryDetail
                                        id={props.match.params.id}
                                        data={this.state.countries}
                                    />
                                )}
                            />
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}