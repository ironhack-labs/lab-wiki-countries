import Navbar from "./Navbar";
import CountriesList from "./CountriesList"
import CountryDetails from "./CountryDetails"
import { Switch } from "react-router";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            {/* React Router Route rendering the CountryDetails should go here */}
            <CountryDetails />
            <Switch>
              <Route path="/" render={props => <RouteParams {...props} />} />
            </Switch>
          </div>
        </div>
      </div>




    </>
  )
}

export default App;
