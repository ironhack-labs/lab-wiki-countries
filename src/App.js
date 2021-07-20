//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';


/* function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
} */

class App extends React.Component{

  render(){

    return(
      <div className="App">
          <NavBar/>
      </div>
    );
  }
}

export default App;
