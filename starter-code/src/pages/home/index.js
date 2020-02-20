import React, { Component } from "react";
import "./App.css";
import CountryLink from "../../components/CountryLink";
import CountryDetail from "../../components/CountryDetail";
import data from "../../countries.json";

class App extends Component {
  state = {
    countries: data,
    country: {}
  }

  componentDidMount(){
    const nuevo = this.state.countries.find(e =>
      e.name.common.includes(this.props.match.params.id)
    )
    console.log(nuevo)
    this.setState({country: nuevo})
  }

  findDetail = () => {
    return this.state.countries.find(e =>
      e.name.common.includes(this.props.match.params.id)
    )
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{
              maxHeight: "90vh",
              overflow: "scroll"
            }}
          >
            <div className="list-group">
              {this.state.countries.map((e, i) => (
                <CountryLink key={i} name={e.name.common} flag={e.flag} />
              ))}
            </div>
          </div>
          <div className="col-7">
            <CountryDetail 
              data = {this.findDetail()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
