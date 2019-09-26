import React from 'react';
import { Layout } from 'antd';
import countries from './../countries.json';
import {Link} from 'react-router-dom'
const { Content } = Layout;
class Country extends React.Component {
  state = {
    country: undefined
  };
  componentWillMount() {
    const { cca3 } = this.props.match.params;
    this.setState(() => {
      const country = countries.filter(country => {
        return country.cca3 === cca3;
      })[0];
      return { country };
    });
  }
  componentWillUpdate = prevProp => {
    const { cca3 } = prevProp.match.params;
    if (this.props.match.params.cca3 !== cca3) {
      this.setState(() => {
        const country = countries.filter(country => {
          return country.cca3 === cca3;
        })[0];
        console.log(country);
        return { country };
      });
    }
  };

  theBorders = () =>{
      const {borders} = this.state.country
      return borders.map(border => {const country = countries.find(country => {
          return country.cca3 === border
      })
    return (
        <p>
            <Link key={country.cca3} to={`/country/${country.cca3}`}>
                {country.name.official}
            </Link>
        </p>
    )
    })
  }

  render() {
    return (
      <Content
        style={{
          background: 'black',
          color: 'white',
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
      <div style={{color: 'white'}}>
      <h1>Hola</h1>
      <ul >
       <li style={{ marginBottom: '20px'}}> <h3 style={{color: 'white'}}>Common Name: </h3>{this.state.country.name.common}</li>
       <li style={{ marginBottom: '20px'}}> <h3 style={{color: 'white'}}>Official Name: </h3>{this.state.country.name.official}</li>
       <li style={{ marginBottom: '20px'}}><h3 style={{color: 'white'}}>Demonym: </h3>{this.state.country.demonym}</li>
       <li style={{ marginBottom: '20px'}}><h3 style={{color: 'white'}}>Area: </h3>{this.state.country.area} km2</li>
       <li style={{ marginBottom: '20px'}}><h3 style={{color: 'white'}}>Borders: <p>{this.theBorders()}</p></h3> </li>
        </ul>
        </div>
      </Content>
    );
  }
}
export default Country;
