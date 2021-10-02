import React from "react"

import './GallerySlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.scss"
import "swiper/components/zoom/zoom.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

let GallerySlider = (props) => {
    return (<Swiper
        module={Autoplay}
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
        autoplay={
            {
                delay: 5000,
                disableOnInteraction: false,
            }
        }
    > {
            props.sliderElements.map((elem) => (
                <SwiperSlide key={elem} className="swiper-slide"  >
                    <div class="swiper-pagination"></div>
                    {elem}
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </SwiperSlide >))
        }
    </Swiper >
    )
}

export default GallerySlider