//import components
import NavBar from './assets/layout/navBar/index'
import Home from './assets/layout/home/index'
//import css
import './App.css';
//import help
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



// MAIN
function App() {
  return (
    <div className="main">
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/> 
        </Routes>

        <li><Link to="/home">Home</Link></li>
    </BrowserRouter>

    
    </div>
  );
}

export default App;