//import components
import NavBar from './assets/layout/navBar/index'
import AppRouter from './routes'
import Home from './assets/layout/home/index'
import Footer from './assets/layout/footer/index'
import { CookiesProvider } from 'react-cookie';
//import css
import './App.css';
//import help

//import ROUTER
import { BrowserRouter as Router } from 'react-router-dom';


// MAIN
function App() {
  return (
    <div className="main">
    <Router>
      <CookiesProvider>
        <NavBar/>
        <AppRouter/>
        <Footer/>
      </CookiesProvider>
    </Router>
    </div>
  );
}

export default App;