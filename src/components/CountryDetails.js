import React from 'react'
import countries from './countries.json'

class CountryDetails extends React.Component {

    state = {
        name: ''
    }

    componentDidUpdate(prevProps) {
        
        if(this.props.match.params.cca3 !==  prevProps.match.params.cca3) {
            const countrie = countries.find(
                (item) => item.cca3 === this.props.match.params.cca3
              );

              if (countrie) {
                this.setState({ name: countrie.name.common});
              }
        }
        
    }

    render () {
        console.log(this.props.match.params);
        console.log(countries.find((item) => item.cca3 === this.props.match.params.cca3))

        return (
            <div className='col-7'>
                <strong>Nome do País: </strong> <span>{this.state.name} </span>
            </div>
        )
    }
}

export default CountryDetails