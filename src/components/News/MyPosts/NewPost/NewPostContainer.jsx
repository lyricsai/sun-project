import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/newsPageReducer'
import NewPost from './NewPost'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return { newPostText: state.newsPage.newPostText, }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}

let NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer