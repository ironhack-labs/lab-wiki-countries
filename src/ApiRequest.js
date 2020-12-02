import React, { Component } from 'react'

class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://countries.tech-savvy.tech/countries")
      .then(res => res.json())
      .then(result => { this.setState({ isLoaded: true, items: result.items }) },
        (error) => { this.setState({ isLoaded: true, error }) }
      )
      .catch(err => new Error(err))
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        console.log('Api connected, imported:', items.length, 'items')
        // <ul>
        //   {items.map(item => ( <li key={item.id}> {item.name} {item.price}</li> ))}
        // </ul>
      )
    }
  }
}

export default ApiCall