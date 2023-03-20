import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
