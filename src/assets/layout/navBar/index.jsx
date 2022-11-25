
//import css
import Styles from './index.module.css'
//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import Logo from '../../img/logo.png'

function navBar(){
    return (
        <Router>
            <nav className={Styles.navBar}>
                <img src={Logo} alt="Logo RadTek" className={Styles.navLogo}/>

                <label htmlFor="search" className={Styles.navLabel}>
                    <input type="text" id="search" className={Styles.navSearch}/>
                    <button className={Styles.button}><FaSearch className={Styles.navSearchButton}/></button>
                    {/* <input type="button" value={FaSearch} className={Styles.navSearchButton}/> */}
                    {/* <div className={Styles.navButton}></div> */}
                </label>


                <ul className={Styles.navLink}>
                    <li><Link to="/home" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Home</Link></li>
                    <li><Link to={{pathname: "/login"}} style={{ textDecoration: 'none' }}  className={Styles.navItem}>Login</Link></li>
                    <li><Link to="/carrinho" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Carrinho</Link></li>
                </ul>
            </nav>
        </Router>
    )
}

export default navBar;

