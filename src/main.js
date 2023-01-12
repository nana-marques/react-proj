//import components
import NavBar from './assets/layout/navBar/index'
import AppRouter from './routes'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
//import css
import './App.css';
//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



// MAIN
function App() {
  return (
    <div className="main">
      <AppRouter/>      
    </div>
  );
}

export default App;