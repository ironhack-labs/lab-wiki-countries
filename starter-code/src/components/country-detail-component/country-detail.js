import React from 'react';
import './country-detail.css';
import {Link} from 'react-router-dom';

class CountryDetail extends React.Component {
   
    findSelectedCountry = () => {
       let country = this.props.countriesList.find(country => country.cca3 === this.props.match.params.cca3);

            return (
                <div className="card" >
                <div className="card-header">
                   <h1>{country.name.common}</h1>
                </div>
                <div className="list-group list-group-flush">
                    <div className="list-self">
                      <label >Capital</label>
                        <p className="capital">{country.capital}</p>
                    </div>
                    <div className="list-self">
                       <label className="area-label">Area</label>
                       <p >{country.area}</p>
                    </div>
                    <div className="list-self border-label">
                       <label >Borders</label>
                       <div>
                         <ul className="border-list">{this.display(country.borders)}</ul>
                       </div>
                    </div>
                </div>
             </div>
             );   
    }
    convertCountryName = (list) => {
        let newList = [];
         list.forEach(l => {
           let countrySelf = this.props.countriesList.find(c => (c.cca3 === l));
           newList.push(countrySelf.name.common);
      })
      return newList;
    }
    display = (list) => {
       let originalList = [...list];
        list = this.convertCountryName(list)
        return list.map((l,ind) => {
          return (
              <Link key={ind} to={'/country-detail/'+ originalList[ind]} ><li>{l}</li></Link>
          )
        })
    }
   
    render() {
        return (
            <div className="country-content">
                {this.findSelectedCountry()}
            </div>
        )
    }
}
export default CountryDetail;
