
//import css
import Styles from './index.module.css'
//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import icons
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

//import react
import { Button } from 'reactstrap';
import { Input } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { Col } from 'reactstrap';
import { Navbar } from 'reactstrap';

//import logo
import Logo from '../../img/logo.png'

//import search
import SearchBar from '../search/searchBar';

function navBar(){
    return (
        <Router>
            <div className={Styles.navBar}>
                <img src={Logo} alt="Logo RadTek" className={Styles.navLogo}/>

                {/* <div className={Styles.searchContainer}>
                    <form action="" className={Styles.search}>
                        <input type="text" name="search" placeholder='Pesquisar' className={Styles.navSearch}/>
                        <button className={Styles.button} aria-label="Search"><FaSearch className={Styles.navSearchButton}/></button>
                    </form>
                </div> */}

                <SearchBar />

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

