import './NewPost.scss'
import React from 'react'

import { addPostActionCreator, updatePostTextActionCreator } from '../../../../redux/state'


const NewPost = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {

        let text = newPostElement.current.value
        let action = updatePostTextActionCreator(text)
        props.dispatch(action)

    }

    return (
        <div className="newPost">
            {/* <h4>New Post</h4> */}
            <textarea name=""
                onChange={onPostChange}
                value={props.newPostText}
                ref={newPostElement}
                cols="60" rows="5"
                className="newPost__input"
                placeholder="Type something..." >
            </textarea>
            <button type="button"
                value="Post It"
                className='newPost__button'
                onClick={addPost}>Post It</button>
        </div>
    )
}


export default NewPost