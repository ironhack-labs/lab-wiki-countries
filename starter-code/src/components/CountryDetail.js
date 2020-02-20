import React, { Component } from 'react'
import countries from '../countries.json'
import styled from 'styled-components'

const StyledCard = styled.div`
    padding: 50px;
    h2, p {
        font-size: 3rem;
        line-height: 3rem;
    }
`

export default class CountryDetail extends Component {

    state = {
        country: {}
    }

    componentDidUpdate(prevProps) {
        console.log('prevProps:', prevProps)
        console.log('thisProps', this.props)
		if (this.props.location !== prevProps.location) {
            const country = countries.find(country => country.cca3 === this.props.match.params.cca3)
            this.setState({country})
        }
        console.log(this.state)
    }
    
    render() {
        return (
            <StyledCard>
                <h2>Country:</h2>
                <p>Capital:{this.state.country.capital}</p>
                <p>Area: {this.state.country.area}</p>
                <p>Flag: {this.state.country.flag}</p>
                <p>Border: {this.state.country.borders}</p>
            </StyledCard>
        )
    }
}
