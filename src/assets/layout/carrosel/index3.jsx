import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img1 from '../../img/xbox.jpg'
import Img2 from '../../img/xboxX.jpg'

const Teste = () => {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    return(
        <Carousel responsive={responsive}>
            <div><img src={Img1} alt="" /></div>
            <div><img src={Img2} alt="" /></div>
            <div><img src={Img1} alt="" /></div>
            <div><img src={Img2} alt="" /></div>
            <div><img src={Img1} alt="" /></div>
            <div><img src={Img2} alt="" /></div>
        </Carousel>
    )
}

export default Teste

//https://www.npmjs.com/package/react-multi-carousel?activeTab=readme << documentação

