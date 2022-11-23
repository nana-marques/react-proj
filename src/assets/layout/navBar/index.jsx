
//import css
import Styles from './index.module.css'
//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from '../../img/logo.png'

function navBar(){
    return (
        <Router>
            <nav className={Styles.navBar}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/carrinho">Carrinho</Link></li>
                </ul>
            </nav>
        </Router>
    )
}

export default navBar;