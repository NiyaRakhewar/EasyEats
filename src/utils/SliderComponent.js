import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css'; // Import custom styles for the slider


function SliderComponent({code, dotsFlag,slideShowCount }) {
    const settings = {
        dots: dotsFlag,
        infinite: true,
        speed: 500,
        slidesToShow: slideShowCount ? slideShowCount: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1444,
            settings: {
              slidesToShow: slideShowCount? slideShowCount - 2 : 4,
            },
          },
          {
            breakpoint: 1184,
            settings: {
              slidesToShow: slideShowCount? slideShowCount - 4 :  3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slideShowCount? slideShowCount - 6 : 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: slideShowCount? slideShowCount - 8 : 1,
            },
          },
        ],
      };
      function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick-arrow slick-next"
            onClick={onClick}
            style={{ right: 15 }}
          >
            {/* <button className="text-black">&#9654;</button> */}
          </div>
        );
      }
    
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="slick-arrow slick-prev"
            onClick={onClick}
            style={{ left: 15 }}
          >
            {/* <button className="text-black">&#9664;</button> */}
          </div>
        );
      }
    
      return (
          <Slider {...settings}>

{code}
            
          </Slider>
      );
    }
    

export default SliderComponent;
