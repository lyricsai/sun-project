import "./MainPicture.scss"
import moon from '../../../assets/static/images/moon.jpg'

const MainPicture = () => {
    return (
        <div className="main__image_container">
            <img src={moon} alt="me" className="main__image" />
        </div>
    )
}

export default MainPicture