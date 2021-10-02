import './News.scss';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const News = () => {
    return (
        <div>
            <section className="news">
                <h2 className="about__artist">My news</h2>
                <MyPostsContainer />
            </section>
        </div>
    )
}

export default News