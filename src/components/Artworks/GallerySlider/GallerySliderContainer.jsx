import './GallerySlider.scss'
import { connect } from 'react-redux'
import GallerySlider from './GallerySlider'

let mapStateToProps = (state) => {

    return {
        artworks: state.artworks,
        slides: state.artworks.artworks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

let GallerySliderContainer = connect(mapStateToProps, mapDispatchToProps)(GallerySlider)

export default GallerySliderContainer