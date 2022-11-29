//import components
import NavBar from './assets/layout/navBar/index'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
import './App.css';
// import { Login } from '../src/assets/layout/login/index';
//import help

// MAIN
function App() {
  return (
    <div className="main">
    <NavBar/>
    {/* <Login /> */}
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;