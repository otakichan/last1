import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from'./img/keiko12.png';
import slidimg2 from'./img/keiko13.png';
import slidimg3 from'./img/keiko14.png';

function Slider(){
    return(<Carousel>
        <div>
            <img src={slideImg1}></img>
            <p className='legend'>ケイコ1</p>
        </div>
        <div>
            <img src={slidimg2}></img>
            <p className='legend'>ケイコ2</p>
        </div>
        <div>
            <img src={slidimg3}></img>
            <p className='legend'>ケイコ3</p>
        </div>
        </Carousel>)
};

export default Slider;

