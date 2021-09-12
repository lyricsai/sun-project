import './MyPosts.scss';
import Post from './Post/Post'
import NewPost from './NewPost/NewPost';



const MyPosts = (props) => {

    debugger
    let postsElements = props.state.postsData.map(post => <Post message={post.message} likesCounter={post.likesCounter} />)




    return (
        <section className="main__posts posts">
            <h2>My Posts</h2>
            <NewPost addPost={props.addPost} />
            <div className="posts__history">
                {postsElements}
            </div>
        </section>
    )
}

export default MyPosts