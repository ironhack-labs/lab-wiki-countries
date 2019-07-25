import React, { Component } from 'react';
import ListItems from '../listitems/ListItems.js'
import './list.css'

function List(props) {

  let showCountries = () => {
    return props.countries.map((eachCountry, i)=>{
      return <ListItems key={i} name={eachCountry.name.common} flag={eachCountry.flag} countrycode={eachCountry.cca3} />
    })
  }



    return (
      <div className="list">
        {showCountries()}
      </div>
    );
  }


export default List;