
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

                <div className={Styles.navLink}>
                    <span><Link to="/home" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Home</Link></span>
                    <span><Link to="/search" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Login</Link></span>
                    <span><Link to="/carrinho" style={{ textDecoration: 'none' }}  className={Styles.navItem}><FaShoppingCart className={Styles.navCart}/></Link></span>
                </div>
            </div>
        </Router>
    )
}

export default navBar;

