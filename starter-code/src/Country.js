import countries from './countries.json'
import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout


export default class Country extends React.Component {
  state = {
    country: undefined
  }


componentWillUpdate(previousProps) {
  const {cca3} = previousProps.match.params
  if (this.props.match.params.cca3 !== cca3) {
      this.setState(() => {
        const country = countries.find(country => {
          return country.cca3 === cca3;
        });
        console.log(country);
        return { country };
      });
    }
}

  render() {
    const {country} = this.state
  return (
      <Content style={{  background: '#fff',  padding: 24,  margin: 0,  minHeight: 280}}>
        

          
        
      </Content>
  )
  }

}
