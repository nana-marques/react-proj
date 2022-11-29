//import css
import Styles from './index.module.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
//import img
import Logo from "../../img/logoTransparente.png";


function footer(){
    return (
    <div className={Styles.main}>
        <div className={Styles.footer}>
            
            <div className={Styles.col}>
            
                <img src={Logo} />
            </div>
            
            <div className={Styles.col}>
                <h3>Pagamento</h3> <br/>
                <ul>
                    <li>Dinheiro</li>
                    <li>Cartão Debito</li>
                    <li>Cartão Crédito</li>
                    <li>Pix</li>
                </ul>
            </div>
            
            <div className={Styles.col}>
                <h3>Conheça-nos</h3> <br/>
                <ul>
                    <li>Comunidade</li>
                    <li>Acessibilidade</li>
                    <li>Carreiras</li>
                </ul>
            </div>

            <div className={Styles.col}>
                <h3>Deixe-nos ajudar você</h3><br/>
                <ul>
                    <li>Sua conta</li>
                    <li>Frete e prazo de entrega</li>
                    <li>Devoluções e reembolsos</li>
                    <li>Ajuda</li>
                </ul>
            </div>
        </div>
        <br/> <br/> <hr/> <br/>
        <div className={Styles.info}>
                <span><FaWhatsapp/></span>
                <span><FaFacebook/></span>
                <span><FaInstagram/></span>
                <span><FaTwitter/></span>
        </div>
        <br/>
    </div>
        
    )
}

export default footer;