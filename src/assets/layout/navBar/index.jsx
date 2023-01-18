
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
import fullSearch from '../search';

// import { Badge } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';

//import help
import Login from '../login'
import Cart from '../carrinho';
import Home from '../home'
import PagXbox from '../AllPagProducts/pagXbox/index'

function navBar(){
    const styleCart = {paddingRight: "50px"}
    return (
        // <Router>
            <div className={Styles.navBar}>
            <Link to="/"><img src={Logo} alt="Logo RadTek" className={Styles.navLogo}/></Link>

                {/* <div className={Styles.searchContainer}>
                    <form action="" className={Styles.search}>
                        <input type="text" name="search" placeholder='Pesquisar' className={Styles.navSearch}/>
                        <button className={Styles.button} aria-label="Search"><FaSearch className={Styles.navSearchButton}/></button>
                    </form>
                </div> */}

                <SearchBar />

                <div className={Styles.navLink}>
                    <span><Link to="/" style={{textDecoration: 'none'}}  className={Styles.navItem}>Home</Link></span>
                    <span><Link to="/login" style={{textDecoration: 'none'}}  className={Styles.navItem}>Login</Link></span>
                    <span><Link to="/carrinho" style={{ textDecoration: 'none' }}  className={Styles.navItem}>
                            {/* <IconButton size="small" aria-label="show 4 new mails" color="inherit"> */}
                                {/* <Badge badgeContent={20} color="error">
                                    <FaShoppingCart size="23" values={{paddingRight: '50px', width: '50px', marginTop: '5px'}} alt="Carrinho"/>
                                </Badge> */}
                            {/* </IconButton> */}
                        </Link>
                    </span>
                </div>
            </div>

        
    )
}

export default navBar;