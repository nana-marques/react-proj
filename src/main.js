//import components
import NavBar from './assets/layout/navBar/index'
import AppRouter from './routes'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
//import css
import './App.css';
//import help

// MAIN
function App() {
  return (
    <div className="main">
    <NavBar/>
    <AppRouter/>
    <Footer/>
    </div>
  );
}

export default App;