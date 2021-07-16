import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log(response.data);
    this.setState({
      countries: response.data,
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <>
        <h1>Country List</h1>

        {countries && countries.length > 0 ? (
          this.state.countries.map((country) => {
            return (
              <>
                <div key={country.alpha3Code} class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        className="flag"
                        src={country.flag}
                        class="img-fluid rounded-start"
                        alt="..."
                      ></img>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          <Link to={`/${country.alpha3Code}`}>
                            {country.name}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }
}

export default CountriesList;
