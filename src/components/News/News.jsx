import './News.scss';
import MyPosts from './/MyPosts/MyPosts';

const News = (props) => {
    return (
        <div>
            <section className="news">
                <h2 className="about__artist">News</h2>
                <MyPosts state={props.state} />
            </section>
        </div>
    )
}

export default News