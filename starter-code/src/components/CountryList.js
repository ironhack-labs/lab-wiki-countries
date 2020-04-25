import React from 'react'
import datos from '../countries.json'


class CountryList extends React.Component{
    state = {
        countries: []
    }

    componentDidMount(){
        let listaCountries = []
        datos.forEach(item => {
            let country = {
                "flag": item.flag,
                "name": item.name.common,
                "code": item.cca3
            }
            listaCountries.push(country)
        })
        this.setState({countries: listaCountries})
    }

    render() {
        return(
            <div className="CountryList col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    {this.state.countries.map((country) => {
                        return (
                        <a className="list-group-item list-group-item-action" href={"/" + country.code}>{country.flag} {country.name}</a>
                        )
                    })}
                </div>
          </div>
        )
    }
}

export default CountryList