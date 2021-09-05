import './Slide.scss'

const Slide = (props) => {

  // let source = props.artwork.maps(artwork => artwork.artwork)

  return (
    <div className='slideContainer'>
      <img className='slideContainerImage' src={props.artwork} alt={props.id} />
    </div>
  )

}
export default Slide

