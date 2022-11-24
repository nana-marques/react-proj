//import components
import NavBar from './assets/layout/navBar/index'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
import Login from './assets/layout/login/index';
import './App.css';
//import help

// MAIN
function App() {
  return (
    <div className="main">
    <NavBar/>
    <Home/>
    <Footer/>
    <Login />
    </div>
  );
}

export default App;