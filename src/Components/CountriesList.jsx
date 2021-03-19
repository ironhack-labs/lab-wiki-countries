
import React from 'react'


const CountriesList = (props) => {

    const countryList = props.countries

    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countryList.map((country) => (
            <a
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              href={`/${country.alpha3Code}`}
            >
            <img style={{width: '2vw' }}src={country.flag} alt=""/>
                {country.name}
            </a>
          ))}
        </div>
      </div>
    );

   
}

export default CountriesList





        