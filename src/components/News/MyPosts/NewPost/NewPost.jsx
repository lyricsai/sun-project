import './NewPost.scss'
import React from 'react'

const NewPost = () => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }


    return (
        <div className="newPost">
            {/* <h4>New Post</h4> */}
            <textarea name="" ref={newPostElement} cols="60" rows="5" className="newPost__input" placeholder="Type something..." ></textarea>
            <button type="button" value="Post It" className='newPost__button' onClick={addPost}>Post It</button>




        </div>
    )
}


export default NewPost