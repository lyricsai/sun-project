import './NewPost.scss'
import React from 'react'

const NewPost = (props) => {

    let newPostElement = React.createRef()

    let onPostChange = () => {

        let text = newPostElement.current.value
        props.updatePostText(text)

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
                onClick={props.addPost}>Post It
            </button>

            {props.postsElements}
        </div>
    )
}


export default NewPost