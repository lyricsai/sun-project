import React from "react"
import Slide from './Slide/Slide'
import './GallerySlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.scss"
import "swiper/components/zoom/zoom.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

import SwiperCore, { Zoom, Navigation, Pagination, EffectFade } from 'swiper';

SwiperCore.use([Zoom, Navigation, Pagination, EffectFade]);

let GallerySlider = (props) => {
    let sliderElements = props.state.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />)
    return (
        <Swiper
            slidesPerView={1}
            zoom={true}
            grabCursor={true}
            className="mySwiper"
            navigation={true}
            spaceBetween={30}
            loop={true}
            pagination={{ "clickable": true }}
            horizontal={true}
            centeredSlides={true}
        > {
                sliderElements.map((elem) => (
                    <SwiperSlide key={elem} className="swiper-slide"  >
                        {elem}
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </SwiperSlide>))
            }
        </Swiper >
    )
}

export default GallerySlider