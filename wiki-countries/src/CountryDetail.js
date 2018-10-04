import React from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends React.Component{
  render(){
    const country=this.props.data.filter(c=>c.cca3===this.props.id)
    return(
      <div>
        {country.map(c=>{
            return (
              <ul key={c.cca3}>
                <li className="row"><h2>{c.name.official}</h2></li>
                <li className="row"><span className="col-4">Capital</span> <span className="col-8">{c.capital}</span></li>
                <li className="row"><span className="col-4">Area</span> <span className="col-8">{c.area}</span></li>
                <li className="row"><span className="col-4">borders</span>
                  <ul className="col-8">
                    {this.props.data.filter(c2=>{
                      return  c.borders.includes(c2.cca3)
                    }).map(b=>{
                      return <li key={b.cca3}><Link to={"/"+b.cca3}>{b.name.official}</Link></li>
                    })
                  }
                  </ul>
                </li>
              </ul>
              )
            })
        }
      </div>
    )
  }
}