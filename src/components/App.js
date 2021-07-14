import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import countries from './countries.json'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" render={() => <Home countries={countries} />} />
      </Switch>
    </>
  )
}

export default App;
