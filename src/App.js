import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/misc/Navbar/Navbar';
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
