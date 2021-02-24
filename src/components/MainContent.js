import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './CountriesList';

class MainContent extends Component {
  state = {
    countriesList: this.props.countries,
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountriesList countriesList={this.state.countriesList} />
          </div>
          <div clasName="col-6">
            <h1>holi</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default MainContent;
