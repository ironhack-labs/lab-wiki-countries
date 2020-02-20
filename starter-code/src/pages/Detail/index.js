import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'

class Detail extends Component {
    state = {
        countrie:countries,
        detail:{
          "name": {
            "common": "Aruba",
            "official": "Aruba",
            "native": {
              "nld": {
                "official": "Aruba",
                "common": "Aruba"
              },
              "pap": {
                "official": "Aruba",
                "common": "Aruba"
              }
            }
          },
          "tld": [".aw"],
          "cca2": "AW",
          "ccn3": "533",
          "cca3": "ABW",
          "cioc": "ARU",
          "independent": false,
          "status": "officially-assigned",
          "currency": ["AWG"],
          "callingCode": ["297"],
          "capital": ["Oranjestad"],
          "altSpellings": ["AW"],
          "region": "Americas",
          "subregion": "Caribbean",
          "languages": {
            "nld": "Dutch",
            "pap": "Papiamento"
          },
          "translations": {
            "ces": {"official": "Aruba", "common": "Aruba"},
            "deu": {"official": "Aruba", "common": "Aruba"},
            "fra": {"official": "Aruba", "common": "Aruba"},
            "hrv": {"official": "Aruba", "common": "Aruba"},
            "ita": {"official": "Aruba", "common": "Aruba"},
            "jpn": {"official": "\u30a2\u30eb\u30d0", "common": "\u30a2\u30eb\u30d0"},
            "nld": {"official": "Aruba", "common": "Aruba"},
            "por": {"official": "Aruba", "common": "Aruba"},
            "rus": {"official": "\u0410\u0440\u0443\u0431\u0430", "common": "\u0410\u0440\u0443\u0431\u0430"},
            "slk": {"official": "Aruba", "common": "Aruba"},
            "spa": {"official": "Aruba", "common": "Aruba"},
            "fin": {"official": "Aruba", "common": "Aruba"},
            "est": {"official": "Aruba", "common": "Aruba"},
            "zho": {"official": "\u963F\u9C81\u5DF4", "common": "\u963F\u9C81\u5DF4"},
            "pol": {"official": "Aruba", "common": "Aruba"}
          },
          "latlng": [12.5, -69.96666666],
          "demonym": "Aruban",
          "landlocked": false,
          "borders": [],
          "area": 180,
          "flag": "\ud83c\udde6\ud83c\uddfc"
        }
      }
    
      async componentDidMount() {
        let { id } = this.props.match.params
        
        let newCity =await this.state.countrie.find(e =>
          e.cca3.includes(id)
        )
       await this.setState({detail:newCity})
      }

       componentDidUpdate() {
        
        /*Aqui vuelvo a tomar el elemento de params
         let { id } = this.props.match.params
        
        let newCity =await this.state.countrie.find(e =>
          e.cca3.includes(id)
        )
       await this.setState({detail:newCity})
      */
      }
      

    render() {
      return (
       <div>
           <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>WikiCountries</Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
            {this.state.countrie.map(city => (
          <Link className="list-group-item list-group-item-action" to={`/${city.cca3}`}>
          {city.flag} {city.name.official}
          </Link>
        ))}
            
              
            </div>
          </div>
          <div className="col-7">
            <h1>{this.state.detail.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{this.state.detail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.detail.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                    {this.state.detail.borders.map(cities => (
                      <li><Link to={`/${cities}`}>{cities}</Link></li>))}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
       </div>
      )
    }
  }
  
  export default Detail
  