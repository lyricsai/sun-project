import './Posts.scss';
import Post from './Post/Post'


let postsData = [
    { id: 1, message: "Last one", likesCounter: 2 },
    { id: 2, message: "Before", likesCounter: 3 },
    { id: 3, message: "Long Ago", likesCounter: 11 },
]

const Posts = () => {
    return (
        <section className="main__posts posts">
            <h2>My Posts</h2>
            <div className="posts__new">
                <h4>New Post</h4>
                <input autocomplete="off" type="textarea" name="form[]" className="posts__input" placeholder="Type something..." />
                <input type="button" value="Post It" className='input__button' />

            </div>
            <div className="posts__history">
                <Post message={postsData[0].message} likesCounter={postsData[0].likesCounter} />
                <Post message={postsData[1].message} likesCounter={postsData[1].likesCounter} />
                <Post message={postsData[2].message} likesCounter={postsData[2].likesCounter} />

            </div>
        </section>
    )
}

export default Posts