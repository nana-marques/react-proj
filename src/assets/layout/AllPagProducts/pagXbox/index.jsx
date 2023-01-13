import Style from './style.css'
import ImgItem from '../../../img/xboxX.jpg'
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function PagXbox(){
   
    return(
            <div id="cardItemFull">
               <div id="cardItemInfo">
                    <div id='cardInfoItem_1'>
                        <div>
                            <FaRegHeart/> Favoritar
                            <FaShareAlt/> Compartilhar
                        </div> <br/>

                        <img src={ImgItem} />
                    </div>

                    <div id='cardInfoItem_2'>

                    </div>
               </div>
               
               <div>
                
                </div>  
            </div>
    )
}

export default PagXbox;