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
                            <input type="number" max="9" placeholder="Digite o CEP"/>
                        </form>
                        <hr />
                    </div>
                    <button className='buyButton'>Comprar</button>
                </div>

            </div>
            <div id="cardItemFull" className="width">
                <div id="cardItemInfoDesc" className="width">
                    <div id='cardInfoItem_2' className="width">
                        <h2>Informações do produto</h2>
                        <p className='desc'>
                            Xbox Series s, nosso Xbox menor e mais elegante de todos os tempos.
                            Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.
                        </p>
                        <p className='desc'>Experimente uma velocidade e um desempenho de próxima geração com a arquitetura Xbox Velocity alimentada por um ssd personalizado e um software integrado.
                        </p>
                        <p className='desc'>Imagens meramente ilustrativas. Todas as informações divulgadas são de responsabilidade do Fabricante/Fornecedor.
                        </p>
                    </div>
                    
                </div>
            </div>
            {/* <div id="cardItemFull" className="width">
                <div id="cardItemInfoDescFicha" className="width">
                    <div id='cardInfoItem_2'>
                        <h2>Ficha Técnica</h2>
                        <p className='desc'>
                            Xbox Series s, nosso Xbox menor e mais elegante de todos os tempos.
                            Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.
                        </p>
                        <table className='table'>
                            <tbody>
                                <tr className='content1'>
                                    <td>Código</td>
                                    <td>2117190549</td>
                                </tr>
                                <tr className='content2'>
                                    <td>Código</td>
                                    <td>2117190549</td>
                                </tr>
                                <tr className='content1'>
                                    <td>Código</td>
                                    <td>2117190549</td>
                                </tr>
                                <tr className='content2'>
                                    <td>Código</td>
                                    <td>2117190549</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div> */}
        </>
    )
}

export default PagXbox;