import './App.css';
import Navbar from './Navbar'
import countries from './countries.json'
import CountryDetails from './CountryDetails'
import { Switch, Route } from 'react-router-dom'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countryList: "",
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
          countryList: result
        })
      },
        (error) => {
          this.setState({
            error
          })
        }
      )
  }


  getElem(code) {
    this.state.countryList.filter(elm => elm.alpha3Code === code)
  }

  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/" exact render={() =>
          (
            <div className="container">
              <div className="row">
                <ul>
                  {(this.state.countryList === "") ? null : this.state.countryList.map((elm, ind) => <li key={ind}><Link to={elm.alpha3Code}>{elm.name}</Link></li>)}
                </ul>
              </div>
            </div>
          )} />
          <Route path="/:alpha3Code" render={props => <CountryDetails {...props} countryList={this.state.countryList} />} />
        </Switch>
      </div >
    );
  }
}

export default App;
