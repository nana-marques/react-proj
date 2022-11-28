
//import css
import Styles from './index.module.css'

//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import icons
import { FaShoppingCart } from 'react-icons/fa';

//import react
// import { Button } from 'reactstrap';
// import { Input } from 'reactstrap';
// import { InputGroup } from 'reactstrap';
// import { Col } from 'reactstrap';
// import { Navbar } from 'reactstrap';

//import logo
import Logo from '../../img/logo.png'

//import search
import SearchBar from '../search/searchBar';

//login
import Login from '../login'
import { Register } from '../login/Register';

function navBar(){
    const styleCart = {paddingRight: "50px"}
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
                    <span><Link to="/" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Home</Link></span>
                    <span><Link to="/login" style={{ textDecoration: 'none' }}  className={Styles.navItem}>Login</Link></span>
                    <span><Link to="/carrinho" style={{ textDecoration: 'none' }}  className={Styles.navItem}><FaShoppingCart size="23" values={{paddingRight: '50px', width: '50px', marginTop: '4px'}} alt="Carrinho"/></Link></span>
                </div>
            </div>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/carrinho" element={<Carrinho />} /> */}
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default navBar;

