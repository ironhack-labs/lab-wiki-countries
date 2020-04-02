import React, { Component } from 'react'
import countries from "./countries.json"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'


const CountryDetail = () => {

  const countryCopy = [...countries];


  return (
   
        <div className="">
                    <div className="col m-2" style={{maxHeight: '90vh', overflow: 'scroll', textAlign: 'center'}}>
                      <div className="list-group countries">
                      <div>
                          {countryCopy.map(eachCountry => {
                            return (
                        <h5 className="list-group-item list-group-item-action">
                          <Link to={`/${eachCountry.cca3}`}>
                            {eachCountry.flag} 
                            {eachCountry.name.official}
                          </Link>
                        </h5>
                        );
                        })}
                      </div>
                    </div>
                  </div>
            </div>
          );
        };
        export default CountryDetail;

