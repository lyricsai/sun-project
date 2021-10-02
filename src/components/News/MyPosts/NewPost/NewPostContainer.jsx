import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/newsPageReducer'
import NewPost from './NewPost'


const NewPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {

        let action = updatePostTextActionCreator(text)
        props.dispatch(action)

    }

    return (
        <NewPost updatePostText={onPostChange} addPost={addPost} newPostText={props.newPostText} />
    )
}

export default NewPostContainer