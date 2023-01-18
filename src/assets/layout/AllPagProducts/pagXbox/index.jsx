import Style from './style.css'
import ImgItem from '../../../img/xboxX.jpg'
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Carrosel from '../../carrosel/index3'

function PagXbox(){
   
    return(
            <div id="cardItemFull">
               <div id="cardItemInfo">
                    <div id='cardInfoItem_1'>
                        <div id="iconsItem">
                           <div> <FaRegHeart/> Favoritar</div>
                            <div><FaShareAlt/> Compartilhar</div>
                        </div> <br/>
                        <img src={ImgItem} />
                    </div>

                    <div id='cardInfoItem_2'>
                        <p>Console Xbox Series S 500gb Ssd</p>
                        <p>(291 avaliações)  (99 perguntas)</p>
                        <p>Mais informações do produto
</p>
                    </div>
               </div>
               
               <div>
                
                </div>  
            </div>
    )
}

export default PagXbox;