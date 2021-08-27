import './Posts.scss';
import Post from './Post/Post'

const Posts = () => {
    return (
        <section className="main__posts posts">
            <h2>My Posts</h2>
            <div className="posts__new">
                <h4>New Post</h4>
                <input autocomplete="off" type="textarea" name="form[]" className="posts__input" placeholder="Type something..." />
                <input type="button" value="Post It" />

            </div>
            <div className="posts__history">
                <Post message="Last one" likesCounter="2" />
                <Post message="Before" likesCounter="0" />
                <Post message="Long Ago" likesCounter="21" />

            </div>
        </section>
    )
}

export default Posts