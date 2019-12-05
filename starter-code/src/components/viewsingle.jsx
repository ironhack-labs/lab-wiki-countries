import React, { Component } from 'react';
import Countries from './../countries.json';

class ViewSingle extends Component {
  constructor() {
    super();
    this.state = {
      info: {}
    };
    this.fetchData = this.fetchData.bind(this);
    // this.updateState = this.updateState.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    const currentCountryName = this.props.match.params.cca;
    const previousCountryName = previousProps.match.params.cca;
    if (currentCountryName !== previousCountryName) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const countryName = this.props.match.params.cca.toUpperCase();
    console.log('country name from fetchData' + countryName);
    let objToState = Countries.find(data => {
      return data.cca3 === countryName;
    });

    console.log('this is me trying to update the state', objToState);
    this.setState({
      info: objToState
    });
  }

  render() {
    const min = this.state.info;
    // this.fetchData(); this breaks it
    // console.log(min.name.common);

    console.log(min.languages);
    return (
      <div className="bottom">
        {min.name && <h2>{min.name.official}</h2>}
        <p>
          {' '}
          this countrys capital is <b>{min.capital}</b>, its located in{' '}
          <b>{min.region}</b> and their official language is{' '}
          {min.languages && <b>{min.languages[1]}</b>}
        </p>
      </div>
    );
  }
}

export { ViewSingle };
