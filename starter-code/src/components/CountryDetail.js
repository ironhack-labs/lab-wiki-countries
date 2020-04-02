import React from 'react'
import { Link } from 'react-router-dom';
import paises from '../countries.json'

const CountryDetail = props => {
    const cca3=props.match.params.cca3;
    let paisCopy=[...paises]
    const filtCount = paisCopy.filter((pais)=>pais.cca3.includes(cca3));
    let border = filtCount[0].borders;
    let borArray = paisCopy.filter(bord => bord.borders.includes(border[0]))
    console.log(borArray);

    return ( <div className="position-fixed">
            {filtCount.map((pais)=>{
                return <div className="col-7 m-5 pt-5">
                  <h1>{pais.name.common}</h1>
                  <table className="table">
                    <thead />
                    <tbody>
                      <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{pais.capital.map(capital=> capital)}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>{pais.area} km
                          <sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>Borders</td>
                        <td>
                          <ul>
                            {borArray.map((border)=>{
                                return <li><Link key={border.cca3} to={border.cca3}>{border.name.common}</Link></li>
                            } )} 
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>})}
            </div>

    )
}
export default CountryDetail 
