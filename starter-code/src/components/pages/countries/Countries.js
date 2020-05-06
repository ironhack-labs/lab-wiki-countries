import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import countries from '../../../countries.json'


class Countries extends Component {

  constructor() {
    super()

     this.countriesCopy = [...countries]
     this.state = { selectionCountries: this.countriesCopy}

  }


  render() {
    return (
      <section className="container">

        <h1>Paises</h1>

        <ul>

            {this.state.selectionCountries.map((elm, idx) => (

                <li key={elm.cca3}> <Link to={`/countries/${elm.cca3}`}>{elm.flag} { elm.name.common } </Link></li>
                

                )
              )            
            }
        </ul>

      </section>
    );
  }
}

export default Countries;