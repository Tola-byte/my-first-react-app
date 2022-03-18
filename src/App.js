import './App.css';
import Navbar from './components/Navbar.js';
import  {BrowserRouter , Routes, Route , Link} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home />} />
    </Routes>
    </BrowserRouter>
      </div>
      
  );
}


export default App;
