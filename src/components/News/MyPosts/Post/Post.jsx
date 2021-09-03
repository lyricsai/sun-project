import './Post.scss'

const Post = (props) => {
    return (
        <div>
            <img src="#" alt="avatar" className="post__avatar" />
            {props.message}
            <br />
            <button className="post__button">like</button>
            {props.likesCounter}
        </div>
    )
}



export default Post