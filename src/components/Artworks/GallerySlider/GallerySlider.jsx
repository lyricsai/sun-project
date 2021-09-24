import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GallerySlider.scss'
import Slide from "./Slide/Slide";

import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import 'swiper/swiper-bundle.css'
// import 'swiper/swiper.scss'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'


let GallerySlider = (props) => {

    let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >{sliderElements}
            <SwiperSlide></SwiperSlide>


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