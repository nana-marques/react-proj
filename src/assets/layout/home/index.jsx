//import css
import './style.css'
//import component
import Carrosel from '../carrosel/index2'
import Carrosel2 from '../carrosel/index3'
import Card from '../card/'
//import imgs
import Item1 from '../../img/xbox.jpg'
import Item2 from '../../img/xboxX.jpg'
import Item3 from '../../img/play.jpg'
import Item4 from '../../img/play4.jpg'
//import helper
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PagXbox from '../AllPagProducts/pagXbox/index'
// import Login from '../login/index'


function home(){
    
     return (
        <div>
           <Carrosel/>
           <div className='mainContainer'>
                <span>Lançamento</span>
                <span>Entrega</span>
                <span>Promoção</span>
                <span>Cupom do dia</span>
                <span>Mais vendidos</span>
           </div>
           <div className='rowItem'>
                <Link style={{ textDecoration:'none', color:'black' }} to="/PagXbox"><Card price="46,75" oldPrice="89,55" txtButton="Preço Novo Usuário" frete="Frete grátis"/></Link>
                <Card price="46,75" oldPrice="89,55" txtButton="Preço Novo Usuário" frete="Frete grátis"/>
                <Card price="46,75" oldPrice="89,55" txtButton="Preço Novo Usuário" frete="Frete grátis"/>
                <Card price="46,75" oldPrice="89,55" txtButton="Preço Novo Usuário" frete="Frete grátis"/>

           </div>
           <div className='rowCarousel'>
            <Carrosel2/>
           </div>
        </div>
        
    )
}

export default home