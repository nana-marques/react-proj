//import components
import Home from '../home/index'
//import css
import Styles from './index.module.css'
//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function navBar(){
    return (
        <Router>
            <nav className={Styles.navBar}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </nav>
            
            <div className={Styles.container}>
                <Routes>
                    <Route path="/home" element={<Home/>}/> 
                </Routes>
            </div>
        </Router>
    )
}

export default navBar;