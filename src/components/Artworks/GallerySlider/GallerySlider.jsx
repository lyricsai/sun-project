import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GallerySlider.scss'
import Slide from "./Slide/Slide";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


let GallerySlider = (props) => {

    let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        ...
        </Swiper>
    )

}











// let GallerySlider = (props) => {

//     let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)

//     let settings = {
//         infinite: true,
//         dots: true,
//         speed: 500,
//         autoplay: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//         fade: true,
//         swipeToSlide: true,
//         centerMode: true,
//         className: "center",
//         focusOnSelect: true,

//     }

//     return (

//         <div className="gallerySlide" >
//             <Slider {...settings}

//             >{sliderElements}</Slider>
//         </div >
//     );
// }

export default GallerySlider