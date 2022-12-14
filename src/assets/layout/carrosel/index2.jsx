//import imgs
import Img1 from '../../img/anuncio.jpg'
import Img2 from '../../img/anuncio2.jpg'
import Img3 from '../../img/anuncio3.jpg'
import Img4 from '../../img/anuncio4.jpg'
//import help
import React from 'react';
import { Carousel } from 'antd';
//const/import CSS
import "./styles2.css"
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const mainContainer = {
    width:'90%',
    margin:'0 auto',
}
const img={
    width:'100%',
    height:'100%'
}

const App = () => (
  <div style={mainContainer}>
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}><img src={Img1} alt="Imagem1" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}>< img src={Img2} style={img} alt="Imagem1" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src={Img3} alt="Imagem1" /></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img src={Img4} alt="Imagem1" /></h3>
        </div>
    </Carousel>
  </div>
);
export default App;