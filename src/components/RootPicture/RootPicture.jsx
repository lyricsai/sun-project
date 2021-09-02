import './RootPicture.scss'
import moon from './../../images/moon.jpg'

const RootPicture = () => {


    return (
        <section className="frontImageContainer">
            <img src={moon} alt="moon" className='appFront__image' />
        </section>
    )
}

export default RootPicture