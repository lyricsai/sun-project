import './Posts.scss';
import Post from './Post/Post'
import NewPost from './NewPost/NewPost';

let postsData = [
    { id: 1, message: "Last one", likesCounter: 2 },
    { id: 2, message: "Before", likesCounter: 3 },
    { id: 3, message: "Long Ago", likesCounter: 11 },
]

let postsElements = postsData.map(post => <Post message={post.message} likesCounter={post.likesCounter} />)

const Posts = () => {
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