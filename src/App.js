import "./App.css";
 import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-up" element = {<SignUp />}/>
          <Route path="/services" element = { <Services />}/>
          <Route path="/products" element = {<Products />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
