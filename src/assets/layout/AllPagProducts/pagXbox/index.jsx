import Style from './style.css'
import ImgItem from '../../../img/xboxX.jpg'
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Carrosel from '../../carrosel/index3'
import { FaStar, FaRegStar, FaQuestionCircle } from "react-icons/fa";

function PagXbox(){
   
    return(
        <>
            <div id="cardItemFull">
                <div id="cardItemInfo">
                    <div id='cardInfoItem_1'>
                        <div id="iconsItem">
                            <div id="iconFav"><FaRegHeart /> Favoritar</div>
                            <div id="iconShare"><FaShareAlt /> Compartilhar</div>
                        </div> <br />
                        <img src={ImgItem} />
                    </div>

                    <div className='cardInfoItem_2'>
                        <h2>Console Xbox Series S 500gb Ssd</h2>
                        <p>
                            <FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaRegStar fill='#FFD700'/>
                            (291 avaliações)
                        </p>
                        <p>
                            <FaQuestionCircle />(99 perguntas)
                        </p>
                        <a href='#' className='link'>Mais informações do produto</a>
                    </div>
                </div>

                <div id="cardItemInfo2">
                    <div className='cardInfoItem_2'>
                        <p id="oldPrice">R$89,55</p>
                        <h2>R$46,75</h2>
                        <a>Mais informações de pagamento</a>
                        <hr />
                        <form action="">
                            <input type="number" maxLength="9" placeholder="Digite o CEP"/>
                        </form>
                        <hr />
                    </div>
                    <button className='buyButton'>Comprar</button>
                </div>

            </div>
            <div id="cardItemFull">
                <div id="cardItemInfo">
                    <div id='cardInfoItem_1'>
                        <div id="iconsItem">
                            <div id="iconFav"><FaRegHeart /> Favoritar</div>
                            <div id="iconShare"><FaShareAlt /> Compartilhar</div>
                        </div> <br />
                        <img src={ImgItem} />
                    </div>

                    <div className='cardInfoItem_2'>
                        <h2>Console Xbox Series S 500gb Ssd</h2>
                        <p>
                            <FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaStar fill='#FFD700'/><FaRegStar fill='#FFD700'/>
                            (291 avaliações)
                        </p>
                        <p>
                            <FaQuestionCircle />(99 perguntas)
                        </p>
                        <a href='#' className='link'>Mais informações do produto</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PagXbox;