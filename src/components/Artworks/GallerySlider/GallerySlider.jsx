import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GallerySlider.scss'
import Slide from "./Slide/Slide";

let GallerySlider = (props) => {

    let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)


    return (

        <div className="GallerySlide">
            <Slider
                dots={true}
                centerMode={true}
                infinite={true}
                centerPadding={60}
                slidesToShow={3}
                speed={500}
            >{sliderElements}</Slider>
        </div >
    );
}

export default GallerySlider