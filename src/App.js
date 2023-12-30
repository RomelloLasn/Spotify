import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Trackpage from './components/Trackpage';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-teal-800 via-cyan-900 to-cyan-900">
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/track' element={<Trackpage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;