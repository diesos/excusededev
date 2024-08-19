import './App.css'
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import FourZeroFour from './components/FourZeroFour';
import Lost from './components/Lost';
// import ExcuseDetails from './services/ExcuseDetails';
import Excuse from './components/Excuse';

function App() {

  return (
    <Router>
    <>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/lost' element={<Lost />}></Route>
      <Route path="/:id" element={<Excuse/>}></Route>
      <Route path='*' element={<FourZeroFour />}></Route>
    </Routes>
    </>
        </Router>
  )
}

export default App
