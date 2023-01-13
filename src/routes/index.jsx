//Import ROUTER
import { Routes, Route } from "react-router-dom";

//import Layout
import { Login } from '../assets/layout/login/index'
import Register from '../assets/layout/login/Register/index'
import PagXbox  from '../assets/layout/AllPagProducts/pagXbox/index'
import Home from '../assets/layout/home/'
import Cart from '../assets/layout/carrinho'


export default function AppRouter() {
    return (
            <Routes>
                <Route path="/PagXbox" element={<PagXbox />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/carrinho" element={<Cart/>} />
                <Route path="/PagXbox" element={<PagXbox/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
    )
}