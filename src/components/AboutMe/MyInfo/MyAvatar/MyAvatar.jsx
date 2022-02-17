import './MyAvatar.scss'
import me from './../../../../images/me.jpg'

const MyAvatar = () => {
    return (
        <div className="about__me_container">
            <img src={me} alt="face" className="about__me" />
        </div>
    )
}

export default MyAvatar