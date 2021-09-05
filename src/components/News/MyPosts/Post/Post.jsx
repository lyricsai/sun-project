import './Post.scss'
import me from './../../../../images/me.jpg'

const Post = (props) => {
    return (
        <div className="post__container">
            <div className="post__entire">
                <img src={me} alt="avatar" className="post__avatar" />
                <div className="post__body">
                    <p className="post__itself">{props.message}</p>
                </div>

            </div>

            <div className="post__likes">
                <button className="post__button">like</button>
                {props.likesCounter}
            </div>

        </div>
    )
}



export default Post