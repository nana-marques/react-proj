//import components
import NavBar from './assets/layout/navBar/index'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
import Carrosel from './assets/layout/carrosel/index'
//import css
import './App.css';
//import help

// MAIN
function App() {
  return (
    <div className="main">
    <NavBar/>
    <Carrosel/>
    {/* <Home/> */}
    <Footer/>
    </div>
  );
}

export default App;