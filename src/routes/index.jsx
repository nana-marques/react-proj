import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from '../assets/layout/login/index'


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                
            </Routes>
        </Router>
    )
}