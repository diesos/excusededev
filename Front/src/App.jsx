import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import FourZeroFour from './components/FourZeroFour';
import Lost from './components/Lost';
import Excuse from './components/Excuse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/lost' element={<Lost />} />
        <Route path='/:id' element={<Excuse />} />
        <Route path='*' element={<FourZeroFour />} />
      </Routes>
    </Router>
  );
}

export default App;
