  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {

    getBorders = (country) => {
        console.log("hi")
        let countryBorders = country.borders
        let borderArr = []
        for(let i=0;i<countryBorders.length;i++){
            let fullCountry = this.props.countries.find(eachCountry =>{
                return countryBorders[i] === eachCountry.cca3
            })
            borderArr.push(<li><Link to={countryBorders[i]}>{fullCountry.name.common}</Link></li>)
        }

        return (
            <React.Fragment>
                <ul>
                    {borderArr}
                </ul>
            </React.Fragment>
        )
    }


    findDetails = () => {
        // console.log('country detail cca3:',this.props.match.params.id, this.props.countries)
        let theCountry = this.props.countries.find(eachCountry => {
            return eachCountry.cca3 === this.props.match.params.id
        })
        // console.log(theCountry)
        return (
        <React.Fragment>
            <h1>{theCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{theCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{`${theCountry.area} km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {this.getBorders(theCountry)}
                  </td>
                </tr>
              </tbody>
            </table>
        </React.Fragment>




        )
        
    }



    render() {
        return (
            <div className="col-7">
            {this.findDetails()}
          </div>
        );
    }
}

export default CountryDetail;