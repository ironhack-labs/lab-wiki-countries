import './App.css';
import Navbar from './navbar/navbar'
import List from './countriesList/countriesList'
import { Switch, Route, Redirect } from 'react-router-dom'
import Detail from './countriesList/detail'

function App() {
  return <>
    <Navbar />
    <div className="flex">
      <List />
      <div className="details">
      <Switch>
        <Route path="/:abc" render={props => <Detail {...props} />} />
      </Switch></div>
    </div>

  </>;
}

export default App;
