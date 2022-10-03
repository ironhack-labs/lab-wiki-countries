import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/Home/HomeScreen';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomeScreen></HomeScreen>}>Home</Route>
    </Routes>
      
    </div>
  );
}

export default App;
