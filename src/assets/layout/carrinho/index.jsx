//import css
import Styles from './index.module.css';

//import help
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../home'

function Cart(){
    return (
        <div className={Styles.cartContainer}>
            <p className={Styles.cartTitle}>Seu carrinho:</p>
            <div className={Styles.cartDisplay}><p>Você não possui itens no carrinho!</p></div>
            <Link to="/" style={{ textDecoration: 'none' }}  className={Styles.navItem}><button className={Styles.cartButton}>VOLTAR AO INÍCIO</button></Link>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Cart