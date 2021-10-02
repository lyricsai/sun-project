import './MyPosts.scss';
import Post from './Post/Post'
import NewPostContainer from './NewPost/NewPostContainer';



const MyPosts = (props) => {

    let postsElements = props.state.postsData.map(post => <Post message={post.message} likesCounter={post.likesCounter} />)

    return (
        <section className="main__posts posts">
            <NewPostContainer
                newPostText={props.state.newPostText}
                dispatch={props.dispatch} />
            <div className="posts__history">
                {postsElements}
            </div>
        </section>
    )
}

export default MyPosts