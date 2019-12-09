import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import countries from './../../countries.json';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      country: null
    };
  }

  componentDidMount() {
    const result = countries.filter(
      country => country.cca3 === this.props.match.params.country
    );
    this.setState({
      country: result[0]
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.match.params.country !== this.props.match.params.country
    ) {
      const result = countries.filter(
        country => country.cca3 === this.props.match.params.country
      );
      this.setState({
        country: result[0]
      });
    }
  }

  countryName(cca3) {
    const result = countries.filter(country => country.cca3 === cca3);
    return result[0].name.common;
  }

  get isVowel() {
    let re = new RegExp('^[^aeiouW]', 'i');
    return re.test(this.state.country.demonym);
  }

  render() {
    const country = this.state.country;
    return (
      <div>
        {country && (
          <div className="">
            <h1 className="text-2xl py-3 px-5 border-b font-bold">
              <span className="mr-2 mt-1">{country.flag}</span>
              {country.name.common}
              <small className="text-sm text-gray-500 ml-3 font-normal">
                {country.name.official}
              </small>
            </h1>
            <div className="py-3 px-5 flex align-center justify-start border-b">
              <p className="mr-20">
                <span className="text-blue-300 text-sm mr-3">capital</span>
                {country.capital || 'Undefined'}
              </p>
              <p className="mr-20">
                <span className="text-blue-300 text-sm mr-3">subregion</span>
                {country.subregion || 'Undefined'}
              </p>
              <p className="mr-20">
                <span className="text-blue-300 text-sm mr-3">region</span>
                {country.region || 'Undefined'}
              </p>
            </div>
            <div className="py-3 px-5 flex align-center justify-start border-b">
              <p className="font-medium">
                <span className="text-gray-700 text-sm mr-1 font-hairline">
                  a person from {country.name.common} is
                  {this.isVowel ? '' : ' an'}
                </span>
                {country.demonym}.
              </p>
            </div>
            <div className="py-3 px-5 flex align-center justify-start border-b">
              <p className="font-medium">
                <span className="text-gray-700 text-sm mr-1 font-hairline">
                  the currency is
                </span>
                {country.currency}&nbsp;
                {country.callingCode && (
                  <div className="inline">
                    <span className="text-gray-700 text-sm mr-1 font-hairline">
                      and the calling code is
                    </span>
                    +{country.callingCode}
                  </div>
                )}
                .
              </p>
            </div>
            <div className="py-3 px-5 flex align-center justify-start border-b">
              <p className="font-medium">
                {country.area && (
                  <div className="inline">
                    {country.area}
                    <span className="text-gray-700 text-sm font-hairline">
                      km<sup>2</sup> of amazing land for you to explore.
                    </span>
                  </div>
                )}
              </p>
            </div>
            {country.borders.length > 1 && (
              <div className="py-3 px-5 flex align-center justify-start border-b">
                <p className="font-medium">
                  <span className="text-gray-700 text-sm font-hairline">
                    {country.borders.length > 1
                      ? 'has borders with'
                      : 'has a border with'}
                  </span>
                  {country.borders.map((border, index, array) => {
                    return (
                      <Link className="ml-1 text-blue-500" to={`/${border}`}>
                        {this.countryName(border)}
                        {index === array.length - 1 ? '.' : ','}
                      </Link>
                    );
                  })}
                </p>
              </div>
            )}
            {/* <p>{country.latlng}</p> */}
            <div id="map"></div>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetail;
