import './Artworks.scss'
import GallerySlider from './GallerySlider/GallerySlider'

const Artworks = (props) => {
    return (

        <section className="myArtworks">
            <h2 className='myArtworksTitle' >My Art Gallery</h2>

            <GallerySlider state={props.state} />

        </section>

    )
}

export default Artworks