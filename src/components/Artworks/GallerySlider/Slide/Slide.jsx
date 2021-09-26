import './Slide.scss'


const Slide = (props) => {


  return (
    <div className='slideContainer'>
      <img className='slideContainerImage' src={props.artwork} alt={props.id} />
    </div>
  )

}
export default Slide

