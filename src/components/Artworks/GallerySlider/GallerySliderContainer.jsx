import './GallerySlider.scss'
import { connect } from 'react-redux'
import GallerySlider from './GallerySlider'
import PropTypes from 'prop-types'


let mapStateToProps = ({ artworks }) => {

    return {
        artworks: artworks,
        slides: artworks.artworks,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

let GallerySliderContainer = connect(mapStateToProps, mapDispatchToProps)(GallerySlider)

GallerySliderContainer.propTypes = {
    artworks: PropTypes.array
}

export default GallerySliderContainer