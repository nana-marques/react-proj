//import css
import './style.css';
//
import ImgTeste from '../../img/xboxX.jpg'
import { FaStar} from "react-icons/fa";

function Card({img,price,oldPrice,txtButton,frete}){

    return(
        <div className='card'>
            <img src={ImgTeste} />
            <div className='price'>
                {/* VERIFICAÇÃO DE DESCONTO, CASO TENHA ELE MOSTRA O OLDPRICE caso contrario não */}
                <span className='symbol'>R$</span><span><b className='newPrice'>{price} </b> </span>  <span className='oldPrice'>{oldPrice ? oldPrice : ""}</span>
            </div>
            <div className='button'>
                <button className='btn-item'>{txtButton}</button>
            </div>
            <div className='msgItem'>
                <p>2156 vendidos(s) <span className='iconStar'><FaStar/></span> 4.8</p>
                <p>Lorem ipsum, dolor sit amet ...</p>
            </div>
            <div className='frete'>{frete ? frete : ""}</div>
        </div>
    )

}
export default Card