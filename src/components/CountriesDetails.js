import React from 'react';

class CountriesDetails extends React.Component {
  render() {
    console.log(this.props);
    const foundLand = lands.find((countrie) => {
      return countrie.name.common === this.props.match.params.countrieName;
    });
    console.log('foundLand', foundLand);
    return (
      <div>
        <h1>{foundLand.name.common}</h1>
        <hr />
        <h2>{`Capital ${foundLand.capital[0]} `}</h2>
        <hr />
        <h2>{`Area ${foundLand.area} km2 `}</h2>
        <hr />
        <h2>Borders</h2>
        <ul>
          {foundLand.borders.map((borderCountry, i) => {
            return <li key={i}>{borderCountry}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CountriesDetails;
