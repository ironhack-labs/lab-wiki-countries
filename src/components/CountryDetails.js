import React from 'react'
import countries from './countries.json'

class CountryDetails extends React.Component {

    state = {
        name: ''
    }

    componentDidMount() {
        const countrie = countries.find(
          (item) => item.name.cca3 === this.props.match.params.cca3
        );
    
        if (countrie) {
          this.setState({ ...countrie });
        }
    }

    render () {
        return (
            <div className='col-7'>
                {this.state.name}
            </div>
        )
    }
}

export default CountryDetails