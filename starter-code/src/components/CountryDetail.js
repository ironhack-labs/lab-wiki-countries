import React from 'react'
import datos from '../countries.json'

class CountryDetail extends React.Component{
    state = {
        countryName: "",
        capital: "",
        area: "",
        borders: [],
    }

    getCountryNameByCode(codigoPais){
        let name = ""
        datos.forEach(item => {
            if(item.cca3 === codigoPais){
                name = item.name.common
            }
        });
        return name
    }

    componentDidMount(){
        const {country} = this.props

        datos.forEach(item => {
            if(item.cca3 === country){
                console.log("El país es: ")
                console.log(item)
                let fronteras = []

                item.borders.forEach(codigo => {
                    fronteras.push({"name": this.getCountryNameByCode(codigo), "codigo": codigo})
                })

                console.log("Frontera")
                console.log(fronteras)

                this.setState({
                    countryName: item.name.common,
                    capital: item.capital[0],
                    area: item.area,
                    borders: fronteras,
                })
            }
        });
    }

    render(){
        const {capital, area, countryName} = this.state;

        return (
            <div className="col-7">
                <h1>{countryName}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{area} km
                        <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                        <ul>
                            {this.state.borders.map((elem) => {
                                return (
                                    <li><a href={"/" + elem.codigo}>{elem.name}</a></li>
                                )
                            })}
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetail