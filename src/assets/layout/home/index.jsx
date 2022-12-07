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
           <div>
                <div className='anuncio'><h1>Somente <span>HOJE!</span></h1></div>
           </div>
           <div className='rowItem'>
                
                <Card price="46,75" oldPrice="89,55" txtButton="Preço Novo Usuário" frete="Frete grátis"/>
                {/* <div className='card'>
                    <img src={Item1} alt="xbox series S" />
                    <div className='price'></div>
                    <div className='button'></div>
                    <div className='msgItem'></div>
                    <div className=''></div>
                </div>
                <div className='card'>
                <h2>Xbox Series X</h2>
                    <img src={Item2} alt="xbox series X" />
                    <p>2.0200,00</p>
                    <br/>
                    por: <button className='btn'><h3>1.899,99</h3></button>
                </div>
                <div className='card'>
                <h2>Playstation 5</h2>
                    <img src={Item3} alt="playstation 5" />
                    <div><p>2.0200,00</p></div>
                    <br/>
                    por: <button className='btn'><h3>1.899,99</h3></button>
                </div>
                <div className='card'>
                <h2>Playstation 4</h2>
                    <img src={Item4} alt="playstation 4" /> 
                    <p>2.0200,00</p>
                    <br/>
                    por: <button className='btn'><h3>1.899,99</h3></button>
                </div> */}

           </div>
           <div className='rowCarousel'>
            <Carrosel2/>
           </div>
        </div>
        
    )
}

export default home