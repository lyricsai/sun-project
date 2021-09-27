import './NewPost.scss'
import React from 'react'
import { rerenderEntireTree } from './../../../../render'

const NewPost = (props) => {


    let newPostElement = React.createRef()

    let addPost = () => {

        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
        rerenderEntireTree()

    }

    let onPostChange = () => { }



    return (
        <div className="newPost">
            {/* <h4>New Post</h4> */}
            <textarea name="" onChange={onPostChange} value={props.newPostText} ref={newPostElement} cols="60" rows="5" className="newPost__input" placeholder="Type something..." ></textarea>
            <button type="button" value="Post It" className='newPost__button' onClick={addPost}>Post It</button>




        </div>
    )
}


export default NewPost