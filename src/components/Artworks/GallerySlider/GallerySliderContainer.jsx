import React from "react"
import Slide from './Slide/Slide'
import './GallerySlider.scss'
import { connect } from 'react-redux'
import GallerySlider from './GallerySlider'

import "swiper/swiper.scss"
import "swiper/components/zoom/zoom.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);


let mapStateToProps = (state) => {

    return {
        artworks: state.artworks,
        sliderElements: state.artworks.artworks.map(artwork => <Slide artwork={artwork.artwork} id={artwork.id} />),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let GallerySliderContainer = connect(mapStateToProps, mapDispatchToProps)(GallerySlider)

export default GallerySliderContainer