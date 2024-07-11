import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mens_kurta } from './../../assets/Data';
import Sectioncart from "../SectionCart/Sectioncart";
import { useRef } from "react";
import router from './../../Router/Router';
function Homesectionman() {
    let sliderRef = useRef(null);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", display : "flex", justifyContent : "center", alignItems : "center", zIndex : "999" ,  borderRadius : "10%",width : "35px", height : "50px" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
       style={{ ...style, display: "block", background: "black", display : "flex", justifyContent : "center", alignItems : "center", zIndex : "999" ,  borderRadius : "10%",width : "35px", height : "50px" }}
            onClick={onClick}
          />
        );
      }
 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      slidesToShow: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
     
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings} ref={slider => {
                sliderRef = slider;
            }}>
                {mens_kurta.slice(1, 10).map((item,index) => <Sectioncart product={item} key={index}></Sectioncart>)}
            </Slider>
        </div>
    );
}

export default Homesectionman;
