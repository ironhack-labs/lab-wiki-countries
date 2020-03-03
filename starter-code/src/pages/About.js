import React from 'react';
import countries from '../countries.json';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

const About = (props) => {
  const { params } = props.match;
  const country = countries.find(item => item.cca3 === params.id);
  const borders = country.borders.map(eachId => {
    return {[eachId]: countries.find(eachCountry => eachCountry.cca3 === eachId ).name.common};
  });
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{"maxHeight": "90vh", "overflow": "scroll"}}>
          <CountryList countries={countries}/>
        </div>
        <div className="col-7">
          <CountryDetail  name={country.name.common} capital={country.capital} area={country.area} borders={borders}/>
        </div>
      </div>
    </div>
  );
};

export default About;