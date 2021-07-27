import React, { Component } from "react";
import '../App.css';

class CountryDetails extends Component {






    render() {


        let arrayFiltrado = this.props.countries.filter((country) => {

            return country.cca3 === this.props.match.params.cca3
        })


        return (
            <>
                <div className = "info-coutries">
                    <div>
                        <h1>{arrayFiltrado[0].name.common}</h1>
                    </div>
                    <div>
                        <h2>Capital : {arrayFiltrado[0].capital}</h2>
                    </div>
                    <div>
                        <h2>Area : {arrayFiltrado[0].area}km2</h2>
                    </div>
                    <div>
                        <h2>Borders : </h2>
                        <ul>
                            {arrayFiltrado[0].borders.map(element => {
                                return (<li className = "li-borders">{element}</li>)
                            })}
                        </ul>
                    </div>
                </div>

            </>
        )
    }
}

export default CountryDetails