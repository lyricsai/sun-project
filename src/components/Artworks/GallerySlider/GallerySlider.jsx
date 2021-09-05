import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GallerySlider.scss'
import Slide from "./Slide/Slide";

// function ArrowNext(props) {
//     const { slider__arrowNext, style, onClick } = props;
//     return (
//         <div
//             className={slider__arrowNext}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }



let GallerySlider = (props) => {

    let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)

    let settings = {
        infinite: true,
        dots: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        swipeToSlide: true,
        centerMode: true,
        className: "center",
        focusOnSelect: true,

    }

    return (

        <div className="gallerySlide" >
            <Slider {...settings}

            >{sliderElements}</Slider>
        </div >
    );
}

export default GallerySlider