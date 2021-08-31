import "./MainPicture.scss"
import monkey from './../../../images/monkey.jpg';

const MainPicture = () => {
    return (
        <div className="main__image_container">
            <img src={monkey} alt="monkey" className="main__image" />
        </div>
    )
}

export default MainPicture