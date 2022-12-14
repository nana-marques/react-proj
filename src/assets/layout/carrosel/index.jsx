//import css
import "./styles.css"
//import icons
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
//import help
import { useEffect, useState, useRef } from "react";
   

function Carrossel(){

    // setTimeout(() => {handleRightClick()}, 1000); 84

    function slideCarrosel(){
        setTimeout(handleRightClick,12000) 
    }    

    const carousel =useRef (null)

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        slideCarrosel();
    }

    slideCarrosel();

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/shoes.json').then((response)=>response.json())
        .then(setData);
    },[])

    if(!data || !data.length) return null;
    
    console.log(carousel.current)

    return(
            
            <div className="mainContainer">
                <div className="carousel" ref={carousel}>

                    {data.map((item)=>{
                        const {id,name,price,oldPrice,image} = item
                        return(
                            <div className="item" key={id}>
                                <div className="image">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="info">
                                    <span className="name">{name}</span>
                                    <span className="oldPrice">R${oldPrice}</span>
                                    <span className="price">R${price}</span>
                                </div>
                            </div>
                        )
                    })}        
                </div>
                <div className="buttons">
                    <button onClick={handleLeftClick}><FaAngleLeft/></button>
                    <button onClick={handleRightClick}><FaAngleRight/></button>
                </div>
            </div>
            
    )
}
export default Carrossel