import './MyPosts.scss';

const MyPosts = ({ postsElements }) => {

    return (
        <section className="main__posts posts">
            <div className="posts__history">
                {postsElements}
            </div>
        </section>)
}


export default MyPosts