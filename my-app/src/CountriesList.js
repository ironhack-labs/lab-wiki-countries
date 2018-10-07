import React from 'react';
import data from "./countries.json";
import CountryLink from "./CountryLink"



export default class CountriesList extends React.Component {
  render() {
    return (
      <ul className="list-group column">
          {data.map(e => <CountryLink name={e.name.common} flag={e.flag} cca3={e.cca3} key={e.cca3}/>)}
      </ul>
    )
  }
}


