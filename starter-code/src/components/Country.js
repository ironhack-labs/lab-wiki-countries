import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Descriptions } from 'antd'
import countries from '../countries.json'

const { Content } = Layout

class Country extends React.Component {
  state = {
    country: undefined
  }

  componentWillMount() {
    const { cca3 } = this.props.match.params

    this.setState(() => {
      const country = countries.find(country => {
        return country.cca3 === cca3
      })
      return { country }
    })
  }

  componentWillUpdate = prevProp => {
    const { cca3 } = prevProp.match.params

    if (this.props.match.params.cca3 !== cca3) {
      this.setState(() => {
        const country = countries.find(country => {
          return country.cca3 === cca3
        })

        return { country }
      })
    }
  }

  getBorder = () => {
    const { borders } = this.state.country

    return borders.map(border => {
      const country = countries.find(country => {
        return country.cca3 === border
      })
      return (
        <li>
          <Link key={country.cca3} to={`/country/${country.cca3}`}>
            {country.name.common}
          </Link>
        </li>
      )
    })
  }

  render() {
    const { country } = this.state

    return (
      <div>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <h2>{this.state.country.name.common}</h2>
          <Descriptions title="Country info" bordered>
            <Descriptions.Item label="Capital">{country.capital}</Descriptions.Item>
            <Descriptions.Item label="Area">
              {country.area} km
              <super>2</super>
            </Descriptions.Item>
            <Descriptions.Item label="Borders">{this.getBorder()}</Descriptions.Item>
          </Descriptions>
        </Content>
      </div>
    )
  }
}

export default Country
