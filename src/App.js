// src/App.js
import "./App.css";
import {Navbar} from './components'
import Router from './Routes';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Router/>
      </div>
    </div>
  )
}
export default App;