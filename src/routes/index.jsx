import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Login } from '../assets/layout/login/index';
import Register from '../assets/layout/login/Register/index'
import PagXbox  from '../assets/layout/AllPagProducts/pagXbox/index';
import Cart from '../assets/layout/carrinho/index';
import Home from '../assets/layout/home/index';
import NavBar from '../assets/layout/navBar/index';
import Footer from '../assets/layout/footer/index';



export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/carrinho" element={<Cart/>} />
                <Route path="/PagXbox" element={<PagXbox/>} />
                <Route path="/home" element={<Home/>} />  
            </Routes>


            {/* <NavBar/>
            <Home/>
            <Footer/> */}
            
        </Router>
    )
}