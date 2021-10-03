import './Post/Post.scss';
import Post from './Post/Post'
import { connect } from 'react-redux'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    return {
        postsElements: state.newsPage.postsData.map(post => <Post message={post.message} key={post.id} likesCounter={post.likesCounter} />)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer