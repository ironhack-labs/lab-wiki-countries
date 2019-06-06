import React, { Component } from 'react';

import countries from '../countries'
import { Link } from 'react-router-dom'



class Countries extends Component {

  constructor() {

    super()

    this.state = {
      countries,
      borders: []
    }

  }


  getBorders = (borders) => {

    const getCountry = code => {
      const isTheContry = country => {
        return country.cca3 === code
      }
      const theCountry = this.state.countries.find(isTheContry)
      return theCountry.name.official
    }

    let borderCountries = borders.map(code => getCountry(code))

    // TODO: Aqui no entra y no tengo fuck idea del por que!!!!
    this.setState({
      borders: borderCountries
    }, () => {
      console.log('/////')
    })

  }



  render() {
    return (

      <div className="container">
        <div className="row">
          {
            this.state.countries.map((country) => {
              return (
                <div key={country.cca3} className="col-6" >
                  <div className="list-group">

                    {/* TODO:
                    con este onClick he intenado introducir en el estado la lista de paises colindantes, ya que teniamos que extraerlo a partir
                    del array de borderes que son codigos CCa3. El problema es que el this.setState del callback no funciona */}
                    <Link onClick={() => this.getBorders(country.borders)} className="list-group-item list-group-item-action" to={`/detail/${country.cca3}?name=${country.name.official}&capital=${country.capital}&area=${country.area}&borders=${this.state.borders}`}>{country.flag}{country.name.common}</Link>
                  </div>
                </div>
              )

            })
          }
        </div>
      </div>

    )
  }

}

export default Countries