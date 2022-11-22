//import components
import NavBar from './assets/layout/navBar/index'
import Home from './assets/layout/home/index'
//import css
import './App.css';
//import help
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom"


// MAIN
function App() {
  return (
    <div className="main">
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/> 
        </Routes>
    </BrowserRouter>

    <li><Link to="/">Home</Link></li>
    
    </div>
  );
}

export default App;