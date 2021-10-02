import './MyPosts.scss';
import NewPostContainer from './NewPost/NewPostContainer';

const MyPosts = (props) => {

    return (
        <section className="main__posts posts">
            <NewPostContainer />
            <div className="posts__history">
                {props.postsElements}
            </div>
        </section>)
}


export default MyPosts