import React from 'react'
import countries from './countries.json'

class CountryDetails extends React.Component {

    state = {
        name: ''
    }

    componentDidMount() {
        const countrie = countries.find(
          (item) => item.cca3 === this.props.match.params.cca3
        );
    
        if (countrie) {
          this.setState({ name: countrie.name.commom });
        }
    }

    render () {
        console.log(this.props.match.params);
        return (
            <div className='col-7'>
                <strong>Nome do País: </strong> {this.state.name}
            </div>
        )
    }
}

export default CountryDetails