import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../assets/layout/login/index'
import PagXbox  from '../assets/layout/AllPagProducts/pagXbox/index'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/PagXbox" element={<PagXbox />} />
            </Routes>
        </Router>
    )
}