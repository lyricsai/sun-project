import './Posts.scss';
import Post from './Post/Post'
import NewPost from './NewPost/NewPost';



const Posts = (props) => {

    let postsElements = props.postsData.map(post => <Post message={post.message} likesCounter={post.likesCounter} />)

    return (
        <section className="main__posts posts">
            <h2>My Posts</h2>
            <NewPost />
            <div className="posts__history">
                {postsElements}
            </div>
        </section>
    )
}

export default Posts