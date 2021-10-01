import './RootPicture.scss'
import moon from './../../images/moon.jpg'

const RootPicture = () => {


    return (
        <section className="frontImageContainer">
            <h3>The picture of the month!</h3>
            <h2>The silence of the moon</h2>
            <img src={moon} alt="moon" className='appFront__image' />
        </section>
    )
}

export default RootPicture