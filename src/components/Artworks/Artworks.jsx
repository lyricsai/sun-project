import './Artworks.scss'
import GallerySliderContainer from './GallerySlider/GallerySliderContainer'

const Artworks = () => {
    return (

        <section className="myArtworks">
            <h2 className='myArtworksTitle' >My Art Gallery</h2>

            <GallerySliderContainer />

        </section>

    )
}

export default Artworks